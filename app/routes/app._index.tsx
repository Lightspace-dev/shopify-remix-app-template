import type { LoaderFunctionArgs } from '@remix-run/node'
import { Page, Layout, Card } from '@shopify/polaris'
import { authenticate } from '../shopify.server'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request)
  return null
}

export default function Index() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <div className="space-y-4 p-4">
              <h1 className="text-2xl font-bold text-gray-900">Welcome to your app</h1>
              <p className="text-gray-600">This is your app's home page. Start building your app's features here.</p>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
