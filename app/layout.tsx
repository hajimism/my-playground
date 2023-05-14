import { Inter } from "next/font/google";

import { Header } from "@/components/ui/Header";
import { Toaster } from "@/components/ui/Toast";

import { Providers } from "./provider";

import "@/style/tailwind.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Playground og hajimism",
  description: "I am playing with Next v13.",
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
        </Providers>
      </body>
    </html>
  );
}
