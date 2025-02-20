import { describe, test, expect } from 'vitest'
import { render } from 'vitest-browser-react'
import { Greeting } from './greeting'

describe('Greeting Component (E2E)', () => {
  test('renders greeting with correct styling', async () => {
    // Render the Greeting component
    const screen = render(<Greeting name="John" />)

    // Get the heading element
    const heading = screen.getByRole('heading')

    // Assert the text content
    await expect.element(heading).toHaveTextContent('Hello, John!')

    // Assert the styling using Tailwind classes
    await expect.element(heading).toHaveClass('text-xl')
    await expect.element(heading).toHaveClass('font-bold')
  })

  test('updates greeting when name changes', async () => {
    // Initial render
    const screen = render(<Greeting name="John" />)

    // Re-render with different name
    screen.rerender(<Greeting name="Jane" />)

    // Get the heading and verify new content
    const heading = screen.getByRole('heading')
    await expect.element(heading).toHaveTextContent('Hello, Jane!')
  })

  test('is accessible', async () => {
    const screen = render(<Greeting name="John" />)

    // Verify heading is level 1
    const heading = screen.getByRole('heading', { level: 1 })
    await expect.element(heading).toBeVisible()

    // Additional accessibility checks could be added here
  })
})
