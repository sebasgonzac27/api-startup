import z from 'zod'

const RequestSchema = z.object({
  RequestDate: z.coerce.date(),
  BorrowDate: z.coerce.date().nullable(),
  StartTime: z.coerce.date(),
  EndTime: z.coerce.date(),
  ClassroomID: z.number().int().positive(),
  ActivityDescription: z.string().nonempty(),
  RequestStatus: z.enum(['Pending', 'Approved', 'Closed']),
  UserID: z.string().trim().uuid(),
  ProgramID: z.number().int().positive(),
  ApprovedBy: z.string().trim().uuid().nullable(),
  ClosedBy: z.string().trim().uuid().nullable()
})

export function validateRequest (input) {
  return RequestSchema.safeParse(input)
}

export function validatePartialRequest (input) {
  return RequestSchema.partial().safeParse(input)
}
