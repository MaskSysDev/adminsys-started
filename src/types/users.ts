export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  image?: string
  role: Roles
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

export const Roles = {
  ADMIN: "ADMIN",
  READER: "READER",
  WRITER: "WRITER",
  EDITOR: "EDITOR",
} as const

export type Roles = (typeof Roles)[keyof typeof Roles]
