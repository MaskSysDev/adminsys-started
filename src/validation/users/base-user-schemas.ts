import { z } from "zod"

import { sanitizeEmail, sanitizeName, sanitizePassword } from "@/utils/sanitize"

/**
 * Constantes de validação
 *
 * Centraliza as regras de validação para garantir consistência nas mensagens
 * e facilitar manutenção. Evita duplicação de código e permite alterações
 * centralizadas.
 */
export const VALIDATION = {
  firstName: {
    min: 3,
    max: 100,
    required: "First name is required",
  },
  lastName: {
    min: 3,
    max: 100,
    required: "Last name is required",
  },
  email: {
    max: 100,
    required: "Email is required",
    invalid: "Invalid email",
  },
  password: {
    min: 8,
    max: 100,
    required: "Password is required",
    // Regex para garantir senha forte: maiúscula, minúscula, número e caractere especial
    regex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    invalid:
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character",
  },
  confirmPassword: {
    required: "Password confirmation is required",
    mismatch: "Passwords do not match",
  },
  code: {
    required: "Code is required",
    invalid: "Invalid code",
  },
  token: {
    required: "Token is required",
    invalid: "Invalid token",
  },
}

/**
 * Schemas base reutilizáveis
 *
 * Define schemas base que podem ser reutilizados em diferentes contextos
 * de validação. Cada schema inclui transformações para sanitização dos
 * dados antes da validação.
 */
export const baseUserSchemas = {
  firstName: z
    .string()
    .min(1, VALIDATION.firstName.required)
    .min(
      VALIDATION.firstName.min,
      `First name must be at least ${VALIDATION.firstName.min} characters`
    )
    .max(
      VALIDATION.firstName.max,
      `First name must be at most ${VALIDATION.firstName.max} characters`
    )
    .transform(sanitizeName),
  lastName: z
    .string()
    .min(1, VALIDATION.lastName.required)
    .min(
      VALIDATION.lastName.min,
      `Last name must be at least ${VALIDATION.lastName.min} characters`
    )
    .max(
      VALIDATION.lastName.max,
      `Last name must be at most ${VALIDATION.lastName.max} characters`
    )
    .transform(sanitizeName),
  email: z
    .email(VALIDATION.email.invalid)
    .min(1, VALIDATION.email.required)
    .max(
      VALIDATION.email.max,
      `Email must be at most ${VALIDATION.email.max} characters`
    )
    .transform(sanitizeEmail),
  password: z
    .string()
    .min(1, VALIDATION.password.required)
    .regex(VALIDATION.password.regex, VALIDATION.password.invalid)
    .min(
      VALIDATION.password.min,
      `Password must be at least ${VALIDATION.password.min} characters`
    )
    .max(
      VALIDATION.password.max,
      `Password must be at most ${VALIDATION.password.max} characters`
    )
    .transform(sanitizePassword),
  image: z.string().optional(),
}
