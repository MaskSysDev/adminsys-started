import { z } from "zod"

import { Roles } from "@/types/users"
import { baseUserSchemas } from "@/validation/users/base-user-schemas"
import { asIsoDateString } from "@/validation/zod"

export const usersSchema = z.object({
  id: z.string(),
  firstName: baseUserSchemas.firstName,
  lastName: baseUserSchemas.lastName,
  email: baseUserSchemas.email,
  password: baseUserSchemas.password,
  image: baseUserSchemas.image,
  role: z.enum(Roles).default(Roles.READER),
  createdAt: asIsoDateString,
  updatedAt: asIsoDateString,
  deletedAt: z.string().nullable().default(null),
})

export type UsersSchema = z.infer<typeof usersSchema>
