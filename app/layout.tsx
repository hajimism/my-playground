import { Inter } from "next/font/google";
import { Suspense } from "react";

import { Header } from "@/components/ui/Header";
import { Toaster } from "@/components/ui/Toast";

import { CommandPalette } from "./cmdk";
import { Providers } from "./provider";

import "@/style/tailwind.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Playground of hajimism",
  description: "I am playing with Next v13.",
  openGraph: {
    images: [
      `https://${process.env["NEXT_PUBLIC_VERCEL_URL"]}/api/dynamic-og-image`,
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-inter bg-sage-1">
        <Providers>
          <Header />
          <main className="container mx-auto min-h-screen py-8">
            {children}
          </main>
          <Toaster />
          <Suspense fallback={<></>}>
            <CommandPalette />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
