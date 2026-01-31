import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Resolves asset paths for correct loading on subpath deployments (e.g. GitHub Pages) */
export function assetUrl(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('data:')) return path
  const base = import.meta.env.BASE_URL || '/'
  return base + path.replace(/^\//, '')
}
