# Shopify App Template - Remix

Last updated: `2025-02-27`

This is a template for building a [Shopify app](https://shopify.dev/docs/apps/getting-started) using the [Remix](https://remix.run) framework.

## Quick start

### Prerequisites

Before you begin, you'll need the following:

1. **Node.js**: [Download and install](https://nodejs.org/en/download/) it if you haven't already.
2. **Shopify Partner Account**: [Create an account](https://partners.shopify.com/signup) if you don't have one.
3. **Test Store**: Set up either a [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or a [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store) for testing your app.

### Setup

```shell
npm install
```

### Install Playwright

```shell
npx playwright install --with-deps
```

### Local Development

Using npm:

```shell
npm run dev
```

Press P to open the URL to your app. Once you click install, you can start development.

Local development is powered by [the Shopify CLI](https://shopify.dev/docs/apps/tools/cli). It logs into your partners account, connects to an app, provides environment variables, updates remote config, creates a tunnel and provides commands to generate extensions.

### Commit Lint and Semantic Release

This project uses [Commitlint](https://commitlint.js.org/) and [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) to ensure consistent commit messages and automated versioning.

#### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Each commit message should be structured as follows:

```
type(scope): description

[optional body]

[optional footer(s)]
```

**Types:**

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that don't affect the code's meaning (white-space, formatting, etc.)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `perf`: Performance improvements
- `test`: Adding or correcting tests
- `chore`: Changes to build process or auxiliary tools

**Examples:**

```sh
git commit -m "feat(product): add new color selector"
git commit -m "fix(cart): resolve checkout button not working"
git commit -m "docs: update installation instructions"
```

#### Semantic Release

Semantic Release automates the whole package release workflow including:

- Determining the next version number
- Generating release notes
- Publishing the package

The version numbers are automatically determined based on commit messages:

- `feat`: triggers a minor release (1.x.0)
- `fix` or `perf`: triggers a patch release (1.0.x)
- Breaking changes (noted by `BREAKING CHANGE` in commit message): triggers a major release (x.0.0)

The release process is automated through our CI/CD pipeline, triggered on merges to the main branch.

### Build

Remix handles building the app for you, by running the command below with the package manager of your choice:

```shell
npm run build
```

## Deployment

Once you are ready to deploy you need to run in the terminal:

```shell
fly launch --no-deploy
```

## Setting environment variables

Check `.env.example` to review which are the required environment variables. You need to set them using fly.io:

```
fly secrets set FOO=bar
```

## Tech Stack

This template uses [Remix](https://remix.run). The following Shopify tools are also included to ease app development:

- [Shopify App Remix](https://shopify.dev/docs/api/shopify-app-remix) provides authentication and methods for interacting with Shopify APIs.
- [Shopify App Bridge](https://shopify.dev/docs/apps/tools/app-bridge) allows your app to seamlessly integrate your app within Shopify's Admin.
- [Polaris React](https://polaris.shopify.com/) is a powerful design system and component library that helps developers build high quality, consistent experiences for Shopify merchants.
- [Webhooks](https://github.com/Shopify/shopify-app-js/tree/main/packages/shopify-app-remix#authenticating-webhook-requests): Callbacks sent by Shopify when certain events occur
- [Polaris](https://polaris.shopify.com/): Design system that enables apps to create Shopify-like experiences

## Webhooks

This app implements Shopify webhooks to follow the [Privacy Law Compliance](https://shopify.dev/docs/apps/build/privacy-law-compliance). The following webhooks are supported:

- `customers/data-request`: Handles customer data requests
- `customers/redact`: Handles customer data deletion requests
- `shop/redact`: Handles shop data deletion requests
- `app/uninstalled`: Handles app uninstallation
- `app/scopes_update`: Handles app scopes update

### Testing Webhooks

You can test webhooks locally using the Shopify CLI. Here's how to test a webhook:

```bash
shopify app webhook trigger \
  --address <URL>/webhooks/customers/data-request \
  --api-version 2025-01 \
  --client-secret <CLIENT_SECRET> \
  --topic <TOPIC> \
  --delivery-method http
```

Replace the following placeholders:

- `<URL>`: Your app's URL (e.g., `https://some-url.trycloudflare.com` for local development)
- `<CLIENT_SECRET>`: Your app's client secret from the Shopify Partner dashboard
- `<TOPIC>`: The webhook topic to test (e.g., `customers/data-request`)

Example for testing a customer data request:

```bash
shopify app webhook trigger \
  --address https://way-pitch-behaviour-processors.trycloudflare.com/webhooks/customers/data-request \
  --api-version 2025-01 \
  --client-secret your_client_secret \
  --topic customers/data-request \
  --delivery-method http
```

## Resources

- [Remix Docs](https://remix.run/docs/en/v1)
- [Shopify App Remix](https://shopify.dev/docs/api/shopify-app-remix)
- [Introduction to Shopify apps](https://shopify.dev/docs/apps/getting-started)
- [App authentication](https://shopify.dev/docs/apps/auth)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
- [App extensions](https://shopify.dev/docs/apps/app-extensions/list)
- [Shopify Functions](https://shopify.dev/docs/api/functions)
- [Getting started with internationalizing your app](https://shopify.dev/docs/apps/best-practices/internationalization/getting-started)
