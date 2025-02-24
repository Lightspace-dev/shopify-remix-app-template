import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient
}

if (process.env.NODE_ENV !== 'production') {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
}

const prisma: PrismaClient = global.prisma || new PrismaClient()

export { prisma }
