import z from 'zod'

const DeviceSchema = z.object({
  DeviceTypeID: z.number().int().positive(),
  InventoryNumber: z.number().int().positive().nullable(),
  IdentifierNumber: z.number().int().positive().nullable(),
  DeviceStatus: z.enum(['Available', 'In use', 'Damaged'])
})

export function validateDevice (input) {
  return DeviceSchema.safeParse(input)
}

export function validatePartialDevice (input) {
  return DeviceSchema.partial().safeParse(input)
}
