import { z } from 'zod';

// First name validation schema
export const firstNameSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes')
    .trim()
});

// Last name validation schema
export const lastNameSchema = z.object({
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes')
    .trim()
});

// Combined name validation schema
export const fullNameSchema = z.object({
  firstName: firstNameSchema.shape.firstName,
  lastName: lastNameSchema.shape.lastName
});

// Type exports
export type FirstNameFormData = z.infer<typeof firstNameSchema>;
export type LastNameFormData = z.infer<typeof lastNameSchema>;
export type FullNameFormData = z.infer<typeof fullNameSchema>; 