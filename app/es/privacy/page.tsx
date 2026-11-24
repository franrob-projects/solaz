import { PrivacyView } from "@/components/pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "privacy");

export default function Page() {
  return <PrivacyView locale="es" />;
}
