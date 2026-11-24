import { ProductsView } from "@/components/pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "products");

export default function Page() {
  return <ProductsView locale="es" />;
}
