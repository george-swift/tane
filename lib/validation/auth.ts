import * as z from 'zod'

export const userAuthSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  password: z.string().min(8).max(128)
})
