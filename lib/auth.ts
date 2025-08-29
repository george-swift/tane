import { env } from '@/env'
import prisma from '@/lib/prisma'
import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { nextCookies } from 'better-auth/next-js'

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET
    },
    google: {
      prompt: 'select_account',
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60 // Cache duration in seconds
    }
  },
  database: prismaAdapter(prisma, {
    provider: 'postgresql'
  }),
  onAPIError: {
    onError: error => {
      // Custom error handling later
      console.error('Auth error:', error)
    }
  },
  plugins: [nextCookies()]
})
