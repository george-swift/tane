'use server'

import { userAuthSchema } from '@/lib/validation/auth'
import { z } from 'zod'

export default async function registerUser(formData: FormData) {
  const parsed = userAuthSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (!parsed.success) {
    return {
      errors: z.treeifyError(parsed.error)
    }
  }

  // const { email, password } = parsed.data

  // Create user logic here
}
