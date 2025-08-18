import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type LogoNavbarProps = {
  logo?: ReactNode | string
  logoIcon?: ReactNode
  logoResponsive?: boolean
}

export function NavLogo({ logo, logoIcon, logoResponsive }: LogoNavbarProps) {
  if (!(logo || logoIcon)) {
    return null
  }

  return (
    <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-all">
      <div className="flex shrink-0 items-center gap-2">
        {logoIcon && (
          <div className="flex aspect-square items-center justify-center rounded-md bg-sidebar-primary p-1 text-sidebar-primary-foreground">
            {logoIcon}
          </div>
        )}

        {logo && (
          <span
            className={cn(
              "shrink-0 font-bold text-3xl leading-normal",
              logoResponsive && logoIcon && "hidden md:flex"
            )}
          >
            {logo}
          </span>
        )}
      </div>
    </div>
  )
}
