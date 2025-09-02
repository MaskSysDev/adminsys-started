import { Roles, type User } from "@/types/users"
import { usersSchema } from "@/validation/users/users.schema"

export async function getServerCurrentUser(): Promise<User | undefined> {
  const user: User | undefined = {
    id: "1",
    firstName: "Admin",
    lastName: "Admin 01",
    email: "admin@email.com",
    password: "Password1!",
    image: "/assets/images/avatar/avatar.jpg",
    role: Roles.READER,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  }

  if (!user) {
    return
  }

  const currentUser = usersSchema.parse(user)

  // Simula delay de rede para melhor UX
  // biome-ignore lint/style/noMagicNumbers: Magic number detected. Extract it to a constant with a meaningful name.
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return currentUser
}

export function getClientCurrentUser(): User | undefined {
  const user: User | undefined = {
    id: "1",
    firstName: "Admin",
    lastName: "Admin 01",
    email: "admin@email.com",
    password: "Password1!",
    image: "/assets/images/avatar/avatar.jpg",
    role: Roles.READER,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  }

  if (!user) {
    return
  }

  const currentUser = usersSchema.parse(user)

  return currentUser
}
