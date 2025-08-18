"use client"

import { X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavLogo } from "@/components/layout/navbar/inc/part/nav-logo"
import type {
  Navbar01Type,
  NavItemType,
} from "@/components/layout/navbar/types"
import { ToggleTheme } from "@/components/layout/toggle/toggle-theme"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"

import { cn } from "@/lib/utils"

function NavMobileItem({ label = "label", href = "#" }: NavItemType) {
  const pathname = usePathname()
  const { setOpenMobile } = useSidebar()

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        className={cn(
          "h-9 px-4 font-medium text-base text-muted-foreground",
          pathname === href ? "bg-primary/10 text-primary" : null
        )}
        onClick={() => setOpenMobile(false)}
      >
        <Link href={href}>
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

interface NavMobileProps
  extends React.ComponentProps<typeof Sidebar>,
    Navbar01Type {}

export function NavMobile({
  label,
  logo,
  logoIcon,
  logoResponsive,
  navItems,
  ...props
}: NavMobileProps) {
  const { setOpenMobile } = useSidebar()

  return (
    <Sidebar {...props}>
      <SidebarHeader className="relative">
        <div className="flex items-center gap-2 px-2 py-2">
          <Link
            className="rounded-md outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            href="/"
            onClick={() => setOpenMobile(false)}
          >
            <NavLogo
              logo={logo}
              logoIcon={logoIcon}
              logoResponsive={logoResponsive}
            />
          </Link>
        </div>
        <Button
          className="absolute top-2 right-2 size-7 cursor-pointer text-muted-foreground"
          onClick={() => setOpenMobile(false)}
          size="icon"
          variant="ghost"
        >
          <X />
        </Button>
        <ToggleTheme className="absolute top-12 right-2" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems?.map((item) => (
                <NavMobileItem
                  href={item.href}
                  key={item.href}
                  label={item.label}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
