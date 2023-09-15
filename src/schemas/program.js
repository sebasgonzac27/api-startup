import z from 'zod'

const ProgramSchema = z.object({
  ID: z.number().int().positive(),
  ProgramName: z.string()
})

export function validateProgram (input) {
  return ProgramSchema.safeParse(input)
}

export function validatePartialProgram (input) {
  return ProgramSchema.partial().safeParse(input)
}
