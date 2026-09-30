import { headers as getHeaders } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function getBusinessAccount() {
  const payload = await getPayload({ config })

  const headers = await getHeaders()

  const { user } = await payload.auth({
    headers,
  })

  if (!user) {
    redirect('/my-account/sign-in')
  }

  if (user.collection !== 'business-accounts') {
    redirect('/my-account/sign-in')
  }

  if (user.accountStatus !== 'active') {
    redirect('/my-account/sign-in')
  }

  return user
}