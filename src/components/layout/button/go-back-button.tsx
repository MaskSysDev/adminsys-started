"use client"

import { ArrowLeftIcon, ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

type GoBackButtonProps = {
  className?: string
  children?: ReactNode
}

export function GoBackButton({ children, className }: GoBackButtonProps) {
  const router = useRouter()

  const onClick = () => {
    router.back()
  }

  return (
    <Button
      className={cn(
        "cursor-pointer bg-background text-muted-foreground",
        className,
        {
          "size-8": !children,
        }
      )}
      onClick={onClick}
      size={children ? "default" : "icon"}
      variant="outline"
    >
      {children ? (
        <>
          <ArrowLeftIcon size={16} />
          {children}
        </>
      ) : (
        <ChevronLeft className="size-4" />
      )}
      <span className="sr-only">Back</span>
    </Button>
  )
}
