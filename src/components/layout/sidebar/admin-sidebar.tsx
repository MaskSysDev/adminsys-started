"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import type * as React from "react"

import { SidebarNavMain } from "@/components/layout/sidebar/inc/sidebar-nav-main"
import { SidebarNavSecondary } from "@/components/layout/sidebar/inc/sidebar-nav-secondary"
import { SidebarNavUser } from "@/components/layout/sidebar/inc/sidebar-nav-user"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

import { adminSidebar, navbar01 } from "@/config/site-config"
import { getClientCurrentUser } from "@/data/users/get-current-user"

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const user = getClientCurrentUser()

  if (!user) {
    notFound()
  }

  return (
    <Sidebar {...props} className="border-none">
      <SidebarHeader className="flex flex-col gap-3 px-4 py-3">
        <Link
          className="mr-4 rounded-md outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          href="/"
        >
          <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-all">
            <div className="flex shrink-0 items-center gap-2">
              {navbar01.logoIcon && (
                <div className="flex aspect-square items-center justify-center rounded-md bg-sidebar-primary p-1 text-sidebar-primary-foreground">
                  {navbar01.logoIcon}
                </div>
              )}

              {navbar01.logo && (
                <span className="shrink-0 font-bold text-3xl leading-normal">
                  {navbar01.logo}
                </span>
              )}
            </div>
          </div>
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
    </Sidebar>
  )
}
