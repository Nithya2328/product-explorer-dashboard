"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="border p-2 rounded w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search products"
    />
  );
}
