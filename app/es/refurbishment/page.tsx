import { RefurbishmentView } from "@/components/pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "refurbishment");

export default function Page() {
  return <RefurbishmentView locale="es" />;
}
