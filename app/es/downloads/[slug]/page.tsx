import { notFound } from "next/navigation";
import { DownloadView } from "@/components/pages";
import { getSite } from "@/lib/i18n";
import { pageMeta } from "@/lib/metadata";

export function generateStaticParams() {
  return getSite("es").downloads.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getSite("es").downloads.find((download) => download.slug === slug);
  if (!item) return {};
  return pageMeta("es", {
    title: item.title,
    description: item.summary,
    path: `/es/downloads/${slug}/`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getSite("es").downloads.some((download) => download.slug === slug)) notFound();
  return <DownloadView locale="es" slug={slug} />;
}
