import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'
import styles from './styles/globals.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'preconnect', href: 'https://cdn.shopify.com/' },
  { rel: 'stylesheet', href: 'https://cdn.shopify.com/static/fonts/inter/v4/styles.css' },
]

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
