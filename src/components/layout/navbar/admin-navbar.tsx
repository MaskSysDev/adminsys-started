import { DropdownUser } from "@/components/auth/dropdown/dropdown-user"
import { Container } from "@/components/layout/container"
import { ToggleTheme } from "@/components/layout/toggle/toggle-theme"
import { SidebarTrigger } from "@/components/ui/sidebar"

import { getServerCurrentUser } from "@/data/users/get-current-user"

export async function AdminNavbar() {
  const user = await getServerCurrentUser()

  return (
    <div className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background">
      <Container className="flex items-center gap-2" size="2xl">
        <SidebarTrigger className="-ml-1.5 size-8 cursor-pointer text-muted-foreground" />

        <div className="ml-auto flex w-auto items-center gap-2">
          <ToggleTheme />
          {user && <DropdownUser user={user} />}
        </div>
      </Container>
    </div>
  )
}
