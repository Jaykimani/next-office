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
      supplyCategories,
      purchaseFrequency,
      interestedInRestocking,
      preferredContactMethod,
      password,
    } = body

    const email = typeof contactPerson.email === 'string' ? contactPerson.email.trim().toLowerCase() : ''; 
    if (!email) { return NextResponse.json( { success: false, message: 'Please provide a valid email address.', }, { status: 400 }, ) }
    
    const area = typeof businessLocation.area === 'string' ? businessLocation.area.trim() : ''
    
    const personName = typeof contactPerson.personName === 'string' ? contactPerson.personName.trim() : '' ;
    const phone = typeof contactPerson.phone === 'string' ? contactPerson.phone.trim() : ''

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

    console.log('Business account registration debug:', {
  email,
  businessLocation,
  contactPerson,
  hasEmail: Boolean(email),
  hasArea: Boolean(businessLocation?.area),
})

    // Create the Business Account
    const businessAccount = await payload.create({
      collection: 'business-accounts',
      data: {
        email: email.trim().toLowerCase(),
        businessName,
        businessType,
        businessLocation : {
          area,
         buildingName: typeof businessLocation.buildingName === 'string' ? businessLocation.buildingName.trim() : '', 
         officeNumber: typeof businessLocation.officeNumber === 'string' ? businessLocation.officeNumber.trim() : '',

        },
       contactPerson: { personName, phone, email, position: contactPerson.position || undefined, },
        preferredContactMethod,
        supplyCategories,
        purchaseFrequency,
        interestedInRestocking,
        

        // New accounts must always start as pending
        accountStatus: 'active',

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