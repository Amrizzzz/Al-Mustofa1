import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/app/context/global";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rumah Sehat Al-Mustofa",
  description: "Rumah Sehat Al-Mustofa melayani dengan sepenuh hati",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/company.png" />
      </head>
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
