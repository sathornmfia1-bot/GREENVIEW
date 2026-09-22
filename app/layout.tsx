import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HAPPY GREEN — Bangkok Lawn & Garden Marketplace",
  description:
    "แพลตฟอร์มจองบริการตัดหญ้าและดูแลสวนสำหรับกรุงเทพฯ เชื่อมลูกค้ากับช่างตัดหญ้ามืออาชีพ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${fraunces.variable} ${plexThai.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
