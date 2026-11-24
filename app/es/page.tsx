import { HomeView } from "@/components/pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "home");

export default function Page() {
  return <HomeView locale="es" />;
}
