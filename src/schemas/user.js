import z from 'zod'

const UserSchema = z.object({
  FullName: z.string().nonempty(),
  Email: z.string().trim().email().nonempty(),
  Username: z.string().nonempty(),
  Password: z.string().nonempty(),
  Phone: z.number().int().positive(),
  Role: z.enum(['Student', 'Teacher', 'Administrator'])
})

export function validateUser (input) {
  return UserSchema.safeParse(input)
}

export function validatePartialUser (input) {
  return UserSchema.partial().safeParse(input)
}
