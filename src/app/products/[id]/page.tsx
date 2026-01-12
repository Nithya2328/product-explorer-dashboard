// src/app/products/[id]/page.tsx
import { Product } from "../../../types/product";
import Image from "next/image";

interface ProductPageProps {
  params: { id: string };
}

// Fetch single product safely
async function fetchProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store", // fetch fresh data at runtime
    });
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProduct(params.id);

  if (!product) {
    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p>We could not fetch the product data at this time.</p>
      </main>
    );
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
      />
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 font-bold">${product.price}</p>
    </main>
  );
}
