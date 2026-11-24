import { CompanyView } from "@/components/pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "company");

export default function Page() {
  return <CompanyView locale="es" />;
}
