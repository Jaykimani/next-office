
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { getPayload } from 'payload'
import config from '@payload-config'

type RestockItem = {
  id: number
  name:string
  category: string
  variant: string
  price: number
  quantity: number
  subtotal: number
}


type CreateRestockPlanInput = {
  frequency: 'weekly' | 'twice-weekly' | 'monthly' | 'twice-monthly'
  deliveryTimeline: { day: string }[]
  contactMeBeforeDelivery : boolean
   items: RestockItem[]
   total: string
}





export async function POST(request: Request) {
  try {
    const payload = await getPayload({ config })

    // Authenticate the request using the customer's Payload session.
    const requestHeaders = await headers()
    const { user } = await payload.auth({
      headers: requestHeaders,
    })

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please log in to create a restock plan.',
        },
        { status: 401 },
      )
    }

    // Only active Business Account customers can create plans.
    if (
      user.collection !== 'business-accounts' ||
      user.accountStatus !== 'active'
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            'An active OfficeFlow Business Account is required to create a restock plan.',
        },
        { status: 403 },
      )
    }

    const body = (await request.json()) as CreateRestockPlanInput
    
    
    const {
      frequency,
      deliveryTimeline,
      contactMeBeforeDelivery,
      items,
      total
    } = body

    console.log(deliveryTimeline);
    


    // Retrieve the authenticated customer's Business Account.
    // The account ID comes from the session, not the submitted form.
    const account = await payload.findByID({
      collection: 'business-accounts',
      id: user.id,
      depth: 0,
      overrideAccess: true,
    })

    if (account.accountStatus !== 'active') {
      return NextResponse.json(
        {
          success: false,
          message: 'Your Business Account is not active.',
        },
        { status: 403 },
      )
    }

    const contact = account.contactPerson as
      | {
          personName?: string
          phone?: string
          email?: string
        }
      | undefined

    const location = account.businessLocation as
      | {
          area?: string
          buildingName?: string
          officeNumber?: string
        }
      | undefined

  const contactMethod = account.preferredContactMethod 

    const businessName =
      typeof account.businessName === 'string'
        ? account.businessName
        : ''

    // Use the Business Account's saved address as the default.
    // Customers may provide a different delivery location if needed.
    const finalDeliveryAddress = {
      businessName,
      areaStreet:
        location?.area ||
        '',
      building:
        location?.buildingName ||
        '',
      officeNumber:
        location?.officeNumber ||
        '',
    }

    if (!finalDeliveryAddress.areaStreet) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Your Business Account does not have a delivery area saved. Please update your account or provide a delivery area.',
        },
        { status: 400 },
      )
    }

    
    // Create the restock plan in Payload CMS.
   const restockPlan = await payload.create({
      collection: 'restock-plans',

      // Enforce the collection's access rules using the authenticated user.
      overrideAccess: false,
      user: user as any, // Cast to any to safely resolve complex cross-collection typing unions

      data: {
        businessAccount: user.id,
        planName: `${businessName || 'Office'} ${frequency} Restock Plan`,

         frequency,

        deliveryTimeline: deliveryTimeline.map((entry) => ({
          day: String(entry).trim(),
        })),


        contactPerson: {
          name: contact?.personName || '',
          phone: contact?.phone || '',
          email: contact?.email || (typeof account.email === 'string' ? account.email : ''),
        },

        ContactMeBeforeDelivery: contactMeBeforeDelivery,

        contactMethod,


        deliveryAddress: finalDeliveryAddress,

        // 🟢 FIXED: Changed 'product' to 'productId' and cast to number
        items: items.map((item) => ({
          productId: Number(item.id), 
          quantity: item.quantity,
          productName: item.name, // Optional fields from schema
          productCategory: item.category,
          variant: item.variant,
          price: item.price,
          subtotal: item.subtotal
        })),

       
        // 🟢 FIXED: Added the missing required 'total' field
        total: total, 

        // 🟢 FIXED: Added the required 'status' field
        status: 'active',
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Your restock plan has been created successfully.',
        plan: {
          id: restockPlan.id,
          planName: restockPlan.planName,
          frequency: restockPlan.frequency,
          status: restockPlan.status,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Create restock plan error:', error)

    return NextResponse.json(
      {
        success: false,
        message:
          'We could not create your restock plan. Please try again.',
      },
      { status: 500 },
    )
  }
}

