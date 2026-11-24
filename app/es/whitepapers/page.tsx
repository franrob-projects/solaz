import { WhitepapersView } from "@/components/pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "whitepapers");

export default function Page() {
  return <WhitepapersView locale="es" />;
}
