"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import type * as React from "react"

import { Logo } from "@/components/layout/logo/logo-adminsys"
import { NavLogo } from "@/components/layout/navbar/inc/part/nav-logo"
import { SidebarNavMain } from "@/components/layout/sidebar/inc/sidebar-nav-main"
import { SidebarNavSecondary } from "@/components/layout/sidebar/inc/sidebar-nav-secondary"
import { SidebarNavUser } from "@/components/layout/sidebar/inc/sidebar-nav-user"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { adminSidebar } from "@/config/site-config"
import { getCurrentUser } from "@/data/users/get-current-user"

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const user = getCurrentUser()

  if (!user) {
    notFound()
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex flex-col gap-3 px-4 py-3">
        <Link
          className="mr-4 rounded-md outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          href="/"
        >
          <NavLogo
            logo={<Logo.Theme />}
            logoIcon={<Logo.Icon className="size-6" />}
          />
        </Link>
      </SidebarHeader>
      <SidebarContent className="gap-0 overflow-hidden py-4 pl-1">
        <ScrollArea className="h-2/3">
          <SidebarNavMain sections={adminSidebar.sections} />
        </ScrollArea>
        <SidebarNavSecondary
          className="mt-auto"
          items={adminSidebar.navSecondary}
        />
      </SidebarContent>
      <SidebarFooter>
        <SidebarNavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
