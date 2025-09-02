import { z } from "zod"

export const asIsoDateString = z.preprocess((val) => {
  if (val instanceof Date) {
    return val.toISOString()
  }
  if (typeof val === "string") {
    return val
  }
  return val
}, z.string())
