import z from 'zod'

const DeviceTypeSchema = z.object({
  TypeName: z.string().nonempty(),
  ImageURL: z.string().url()
})

export function validateDeviceType (input) {
  return DeviceTypeSchema.safeParse(input)
}

export function validatePartialDeviceType (input) {
  return DeviceTypeSchema.partial().safeParse(input)
}
