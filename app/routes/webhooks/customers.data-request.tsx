import type { ActionFunctionArgs } from '@remix-run/node'
import { authenticate } from '../../shopify.server'
import { prisma } from '../../db.server'

export const action = async ({ request }: ActionFunctionArgs) => {
  const { shop, session, topic } = await authenticate.webhook(request)

  console.log(`Received ${topic} webhook for ${shop}`)

  if (session) {
    const result = await prisma.session.findFirst({
      where: {
        id: session.id,
      },
    })

    return new Response(
      JSON.stringify({
        user: result,
      }),
      { status: 200 },
    )
  }

  return new Response()
}
