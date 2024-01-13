import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.scss";
import "./css/all.min.css";
import { Toaster } from "react-hot-toast";
import { DatacontextProvader } from "../context/XisaabContex";
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
      <DatacontextProvader>
        <>
          <body className={inter.className}>{children}</body>
        </>
      </DatacontextProvader>
    </html>
  );
}
