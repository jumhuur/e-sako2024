import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.scss";
import "./css/all.min.css";

const inter = Heebo({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "E-sako | Xisaabinta Sakada Hab Waafaqsan Islaamka",
  description: "Xisaabinta Sakada Hab Waafaqsan Shareecada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
