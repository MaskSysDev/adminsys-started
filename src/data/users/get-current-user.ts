import { Role, type User } from "@/types/users"

export function getCurrentUser() {
  const user: User | undefined = {
    id: "1",
    firstName: "Admin",
    lastName: "Admin 01",
    email: "admin@email.com",
    password: "Password1!",
    image: "/assets/images/avatar/avatar.jpg",
    role: Role.READER,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  }

  return user
}
