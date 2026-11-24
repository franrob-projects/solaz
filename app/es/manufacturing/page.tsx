import { ManufacturingView } from "@/components/pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "manufacturing");

export default function Page() {
  return <ManufacturingView locale="es" />;
}
