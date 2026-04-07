import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { HOST_API } from "../services/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function getImageUrl(url: string | undefined): string {
  if (!url) return "/placeholder.png";
  if (url.startsWith("http")) return url;
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:1337";
  return `${baseUrl}${url}`;
}

export function generateImageUrlProduct(url?: string): string {
  if (!url)
    return "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";

  return `${HOST_API}${url}`;
}
