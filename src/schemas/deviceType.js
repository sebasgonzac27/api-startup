import z from 'zod'

const DeviceTypeSchema = z.object({
  TypeName: z.string().nonempty()
})

export function validateDeviceType (input) {
  return DeviceTypeSchema.safeParse(input)
}

export function validatePartialDeviceType (input) {
  return DeviceTypeSchema.partial().safeParse(input)
}
