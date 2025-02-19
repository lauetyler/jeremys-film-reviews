import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const basePath = "/jeremys-film-reviews";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  return basePath + "/images" + path;
}

export function getNotFoundImage() {
  return basePath + "/images/not_found.jpg";
}