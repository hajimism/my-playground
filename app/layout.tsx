import { Inter } from "next/font/google";

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
      <body className="font-inter">
        <Providers>
          <main className="bg-sage-1 min-h-screen">{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
