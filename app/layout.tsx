import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Chrome } from "@/components/Chrome";
import { siteOrigin } from "@/lib/config";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: { default: "Solaz · Solar heat and heat pumps, Málaga", template: "%s · Solaz" },
  description:
    "Solar thermal collectors, heat pumps and hot water storage, designed and made in Málaga since 2009.",
};

const localeScript = `(function(){var p=location.pathname;var de=/\\/de(\\/|$)/.test(p);document.documentElement.lang=de?"de":"en";document.documentElement.dataset.locale=de?"de":"en";})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeScript }} />
      </head>
      <body>
        <Chrome>{children}</Chrome>
      </body>
    </html>
  );
}
