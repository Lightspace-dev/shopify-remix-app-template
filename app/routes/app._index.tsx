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
            <div className="space-y-m p-m bg-background">
              <h1 className="text-foreground text-2xl font-bold">Welcome to your app</h1>
              <p className="text-foreground-alt">
                This is your app's home page. Start building your app's features here.
              </p>
              <div className="gap-m mt-l flex">
                <button className="px-m py-s bg-primary text-on-primary hover:bg-primary-dark rounded">
                  Primary Button
                </button>
                <button className="px-m py-s bg-accent text-on-accent hover:bg-accent-light rounded">
                  Accent Button
                </button>
              </div>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
