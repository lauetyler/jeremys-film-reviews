import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const basePath = "/jeremys-film-reviews";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  // return path;
  return basePath + path;
  // return path.startsWith("/") ? path : `/${path}`
}