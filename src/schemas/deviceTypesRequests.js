import z from 'zod'

const DeviceTypeRequestsSchema = z.object({
    RequestID : z.number().int().positive(),
    DeviceTypeID : z.number().int().positive(),
    Device : z.string().nonempty(),
})

export function validateDeviceTypeRequest (input) {
  console.log(input)
  return DeviceTypeRequestsSchema.safeParse(input)
}

export function validatePartialDeviceTypeRequest (input) {
  return DeviceTypeRequestsSchema.partial().safeParse(input)
}
