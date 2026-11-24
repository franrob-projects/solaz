import { ContactView } from "@/components/pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "contact");

export default function Page() {
  return <ContactView locale="es" endpoint={process.env.NEXT_PUBLIC_FORM_ENDPOINT || ""} />;
}
