import { getProducts } from "../lib/api";
import ProductExplorer from "./product-explorer";

export default async function HomePage() {
  const products = await getProducts();
  return <ProductExplorer products={products} />;
}
