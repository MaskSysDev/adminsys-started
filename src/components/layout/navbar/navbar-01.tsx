import Link from "next/link"

import { Container } from "@/components/layout/container"
import { NavMain } from "@/components/layout/navbar/inc/nav-main"
import { NavSystem } from "@/components/layout/navbar/inc/nav-system"
import { NavLogo } from "@/components/layout/navbar/inc/part/nav-logo"
import type { Navbar01Type } from "@/components/layout/navbar/types"

type Navbar01Props = {
  navbar: Navbar01Type
}

export function Navbar01({ navbar }: Navbar01Props) {
  const shouldApplyFullWidth = !(
    navbar.navItems ||
    navbar.logo ||
    navbar.logoIcon
  )

  return (
    <div className="fixed top-0 z-50 flex h-16 w-full shrink-0 items-center border-border/60 border-b backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <Container className="flex items-center justify-center" size="2xl">
        <div className="relative flex w-full items-center justify-between gap-2">
          <Link
            className="mr-4 flex items-center rounded-md outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            href="/"
          >
            <NavLogo
              logo={navbar.logo}
              logoIcon={navbar.logoIcon}
              logoResponsive={navbar.logoResponsive}
            />
          </Link>

          {navbar.navItems && (
            <NavMain items={navbar.navItems} position={navbar.position} />
          )}

          <NavSystem
            className={shouldApplyFullWidth ? "w-full justify-end" : undefined}
          />
        </div>
      </Container>
    </div>
  )
}
