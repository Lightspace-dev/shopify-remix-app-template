import type { ActionFunctionArgs } from '@remix-run/node'
import { authenticate } from '../shopify.server'

export const action = async ({ request }: ActionFunctionArgs) => {
  const { shop, topic } = await authenticate.webhook(request)

  console.log(`Received ${topic} webhook for ${shop}`)

  return new Response(undefined, { status: 200 })
}
