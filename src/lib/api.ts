// src/lib/api.ts
import { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 0 }, // ensures runtime fetch in App Router
    });

    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (error) {
    console.error("Error fetching products on server:", error);
    return []; // return empty array instead of breaking
  }
}
