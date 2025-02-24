import type { LoaderFunctionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'

import { login } from '../../shopify.server'

interface LoaderData {
  showForm: boolean
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)

  if (url.searchParams.get('shop')) {
    throw redirect(`/app?${url.searchParams.toString()}`)
  }

  return { showForm: Boolean(login) }
}

export default function Index() {
  const { showForm } = useLoaderData<LoaderData>()

  return (
    <div className="flex h-full w-full items-center justify-center p-4 text-center">
      <div className="grid gap-8">
        <h1 className="m-0 p-0 text-2xl font-bold">A short heading about [your app]</h1>
        <p className="m-0 pb-8 text-lg">A tagline about [your app] that describes your value proposition.</p>

        {showForm && (
          <Form method="post" action="/auth/login" className="mx-auto flex items-center justify-start gap-4">
            <label className="grid max-w-80 gap-1 text-left text-base">
              <span>Shop domain</span>
              <input
                type="text"
                name="shop"
                className="rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="my-shop-domain.myshopify.com"
              />
              <span className="text-sm text-gray-600">e.g: my-shop-domain.myshopify.com</span>
            </label>
            <button
              type="submit"
              className="h-10 rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            >
              Log in
            </button>
          </Form>
        )}

        <ul className="m-0 flex flex-col gap-8 pt-12 md:flex-row md:gap-8">
          <li className="max-w-80 text-left">
            <strong className="text-gray-900">Product feature</strong>
            <p className="mt-2 text-gray-600">Some detail about your feature and its benefit to your customer.</p>
          </li>
          <li className="max-w-80 text-left">
            <strong className="text-gray-900">Product feature</strong>
            <p className="mt-2 text-gray-600">Some detail about your feature and its benefit to your customer.</p>
          </li>
          <li className="max-w-80 text-left">
            <strong className="text-gray-900">Product feature</strong>
            <p className="mt-2 text-gray-600">Some detail about your feature and its benefit to your customer.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
