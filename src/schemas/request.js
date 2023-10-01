import z from 'zod'

const RequestSchema = z.object({
  RequestDate: z.string(),
  BorrowDate: z.string().nullable(),
  StartTime: z.string(),
  EndTime: z.string(),
  ClassroomID: z.number().int().positive(),
  ActivityDescription: z.string().nonempty(),
  RequestStatus: z.enum(['Pending', 'Approved', 'Closed']),
  UserID: z.string().uuid(),
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
