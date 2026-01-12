"use client";

interface Props {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onChange,
}: Props) {
  return (
    <select
      className="border p-2 rounded"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}
