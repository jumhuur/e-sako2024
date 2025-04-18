import type { Metadata } from "next";
import { Heebo, Roboto } from "next/font/google";
import "./globals.scss";
import "./css/all.min.scss";
import { Providers } from "../redux/Providers";
import { Toaster } from "react-hot-toast";
import { DatacontextProvader } from "@/context/XisaabContex";
const inter = Heebo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
    <html lang="so-SO" dir="ltr">
      <Providers>
        <DatacontextProvader>
          <>
            <body className={inter.className}>{children}</body>
          </>
        </DatacontextProvader>
      </Providers>
    </html>
  );
}
