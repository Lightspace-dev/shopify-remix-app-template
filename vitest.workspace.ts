import react from '@vitejs/plugin-react'
import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    plugins: [react()],
    test: {
      include: ['**/*.test.ts'],
      name: 'unit',
      environment: 'node',
    },
  },
  {
    test: {
      include: ['**/*.e2e-test.ts'],
      name: 'e2e',
      browser: {
        enabled: true,
        provider: 'playwright',
        name: 'chromium',
      },
    },
  },
])
