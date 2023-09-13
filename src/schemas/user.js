import z from 'zod'

const UserSchema = z.object({
  FullName: z.string(),
  Email: z.string().trim().email(),
  Username: z.string(),
  Password: z.string(),
  Phone: z.number().int().positive(),
  Role: z.enum(['Student', 'Teacher', 'Administrator'])
})

export function validateUser (input) {
  return UserSchema.safeParse(input)
}

export function validatePartialUser (input) {
  return UserSchema.partial().safeParse(input)
}
