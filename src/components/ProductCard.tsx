"use client";

import Image from "next/image";
import { Product } from "../types/product";
import { useFavorites } from "../hooks/useFavorites";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.includes(product.id);

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto h-40 object-contain"
      />

      <h3 className="mt-3 font-semibold line-clamp-2">{product.title}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-bold mt-1">${product.price}</p>

      <button
        onClick={() => toggleFavorite(product.id)}
        className={`mt-2 text-sm ${
          isFav ? "text-red-500" : "text-gray-500"
        }`}
        aria-label="Toggle Favorite"
      >
        {isFav ? "❤️ Favorited" : "🤍 Add to Favorites"}
      </button>
    </div>
  );
}
