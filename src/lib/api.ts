// src/lib/api.ts
import { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store", // ensures runtime fetch
    });
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // return empty array to prevent build failure
  }
}
