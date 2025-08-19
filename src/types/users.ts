export const Role = {
  ADMIN: "ADMIN",
  READER: "READER",
  WRITER: "WRITER",
  EDITOR: "EDITOR",
} as const

export type Role = (typeof Role)[keyof typeof Role]

export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  image?: string
  role: Role
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}
