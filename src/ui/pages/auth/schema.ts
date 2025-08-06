import z from 'zod';

export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .regex(/^09\d{9}$/, 'Phone number must be a valid Iranian mobile number'),
});
