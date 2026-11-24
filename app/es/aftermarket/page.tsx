import { AftermarketView } from "@/components/pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "aftermarket");

export default function Page() {
  return <AftermarketView locale="es" />;
}
