import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      businessName,
      businessType,
      businessLocation,
      contactPerson,
      email,
      phone,
      position,
      supplyCategories,
      purchaseFrequency,
      interestedInRestocking,
      preferredContactMethod,
      password,
    } = body

   console.log(preferredContactMethod);
   
    const payload = await getPayload({
      config,
    })

    // Check whether an account with this email already exists
    const existingAccount = await payload.find({
      collection: 'business-accounts',
      where: {
        email: {
          equals: email,
        },
      },
      limit: 1,
    })

    if (existingAccount.totalDocs > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'A business account with this email already exists.',
        },
        { status: 409 }
      )
    }

    // Create the Business Account
    const businessAccount = await payload.create({
      collection: 'business-accounts',
      draft: true,
      data: {
        businessName,
        businessType,
        businessLocation,
        contactPerson,
        position,
        phone,
        email,
        preferredContactMethod,
        supplyCategories,
        purchaseFrequency,
        interestedInRestocking,
        

        // New accounts must always start as pending
        accountStatus: 'pending',

        // Payload Auth handles the password securely
        password,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message:
          'Your business account request has been submitted successfully.',
        accountId: businessAccount.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Business account registration error:', error)

    return NextResponse.json(
      {
        success: false,
        message:
          'Something went wrong while creating your business account. Please try again.',
      },
      { status: 500 }
    )
  }
}