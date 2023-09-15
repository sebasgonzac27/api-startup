import z from 'zod'

const CampusSchema = z.object({
  CampusName: z.string().nonempty()
})

export function validateCampus (input) {
  return CampusSchema.safeParse(input)
}

export function validatePartialCampus (input) {
  return CampusSchema.partial().safeParse(input)
}
