import z from 'zod'

const RequestSchema = z.object({
  RequestDate: z.string().datetime(),
  BorrowDate: z.string().datetime().nullable(),
  StartTime: z.string().datetime(),
  EndTime: z.string().datetime(),
  ClassroomID: z.number().int().positive(),
  ActivityDescription: z.string().nonempty(),
  RequestStatus: z.enum(['Pending', 'Approved', 'Closed']),
  UserID: z.string().trim().uuid(),
  ProgramID: z.number().int().positive(),
  ApprovedBy: z.string().trim().uuid().nullable(),
  ClosedBy: z.string().trim().uuid().nullable()
})

export function validateRequest (input) {
  console.log(input)
  return RequestSchema.safeParse(input)
}

export function validatePartialRequest (input) {
  return RequestSchema.partial().safeParse(input)
}
