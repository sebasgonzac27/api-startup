import z from 'zod'

const UserSchema = z.object({
  FullName: z.string().nonempty(),
  Email: z.string().trim().email().nonempty(),
  Password: z.string().nonempty(),
  Phone: z.number().int().positive(),
  Role: z.enum(['Student', 'Teacher', 'Administrator'])
})

export function validateUser (input) {
  // Convierte el campo "Phone" a número si es una cadena
  if (typeof input.Phone === 'string') {
    input.Phone = parseInt(input.Phone, 10) // Convierte a número base 10
  }

  return UserSchema.safeParse(input)
}

export function validatePartialUser (input) {
  // Convierte el campo "Phone" a número si es una cadena
  if (typeof input.Phone === 'string') {
    input.Phone = parseInt(input.Phone, 10) // Convierte a número base 10
  }

  return UserSchema.partial().safeParse(input)
}
