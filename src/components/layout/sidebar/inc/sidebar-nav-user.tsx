"use client"

import { ChevronsUpDown, LogOut, User2Icon } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

import type { User } from "@/types/users"

type SidebarNavUserType = {
  user: User
}

export function SidebarNavUser({ user }: SidebarNavUserType) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              className="cursor-pointer text-muted-foreground transition-colors hover:bg-sidebar-accent/40 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              size="lg"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                {user.image && (
                  <AvatarImage alt={user.firstName} src={user.image} />
                )}
                <AvatarFallback className="rounded-lg">
                  <User2Icon />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tights">
                <span className="truncate font-medium">{user.firstName}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  {user.image && (
                    <AvatarImage alt={user.firstName} src={user.image} />
                  )}
                  <AvatarFallback className="rounded-lg">
                    <User2Icon />
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.firstName}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                asChild
                className="cursor-pointer transition-colors"
              >
                <Link href="/settings/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="cursor-pointer transition-colors"
              >
                <Link href="/settings/account">Account</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              asChild
              className="cursor-pointer transition-colors"
            >
              <Link href="/">
                <LogOut />
                Log out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
