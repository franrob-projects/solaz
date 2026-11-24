import { AutomotiveView } from "@/components/pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "automotive");

export default function Page() {
  return <AutomotiveView locale="es" />;
}
