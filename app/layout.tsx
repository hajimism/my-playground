import { Inter } from "next/font/google";
import { Suspense } from "react";

import { Header } from "@/components/ui/header";
import { Toaster } from "@/components/ui/toast/toaster";

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
      <body className="bg-sage-1 font-inter">
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
