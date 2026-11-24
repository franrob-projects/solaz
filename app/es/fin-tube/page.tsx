import { FinTubeView } from "@/components/pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "finTube");

export default function Page() {
  return <FinTubeView locale="es" />;
}
