import Image from "next/image";
import { getProductById } from "@/src/lib/api";

interface Props {
  params: { id: string };
}

export default async function ProductDetails({ params }: Props) {
  const product = await getProductById(params.id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain"
        />

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-500">{product.category}</p>
          <p className="mt-4">{product.description}</p>
          <p className="mt-4 text-xl font-semibold">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
