import z from 'zod'

const ClassromSchema = z.object({
  ClassroomName: z.string(),
  CampusID: z.number().int().min(0)
})

export function validateClassroom (input) {
  return ClassromSchema.safeParse(input)
}

export function validatePartialClassroom (input) {
  return ClassromSchema.partial().safeParse(input)
}
