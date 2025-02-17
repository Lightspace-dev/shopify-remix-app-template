import type { LoaderFunctionArgs } from '@remix-run/node'
import { Page, Layout, Card, Text } from '@shopify/polaris'
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
            <Text as="h1" variant="headingLg">
              Welcome to your app
            </Text>
            <Text as="p" variant="bodyMd">
              This is your app's home page. Start building your app's features here.
            </Text>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
