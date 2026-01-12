"use client";

import { useState } from "react";
import { Product } from "../types/product";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import { useFavorites } from "../hooks/useFavorites";

interface Props {
  products: Product[];
}

export default function ProductExplorer({ products }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [showFavs, setShowFavs] = useState(false);

  const { favorites } = useFavorites();

  const categories = Array.from(
    new Set(products.map((p) => p.category))
  );

  const filtered = products.filter((p) => {
    if (showFavs && !favorites.includes(p.id)) return false;
    if (category && p.category !== category) return false;
    if (!p.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter
          categories={categories}
          selected={category}
          onChange={setCategory}
        />
        <button
          onClick={() => setShowFavs((v) => !v)}
          className="border px-4 rounded"
        >
          {showFavs ? "All Products" : "Favorites"}
        </button>
      </div>

      <ProductGrid products={filtered} />
    </main>
  );
}
