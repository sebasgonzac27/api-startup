import z from 'zod'

const DeviceRequestsSchema = z.object({
    RequestID : z.number().int().positive(),
    DeviceID : z.number().int().positive(),
})

export function validateDeviceRequests (input) {
  console.log(input)
  return DeviceRequestsSchema.safeParse(input)
}

export function validatePartialDeviceRequests (input) {
  return DeviceRequestsSchema.partial().safeParse(input)
}
