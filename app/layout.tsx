import Header from "@/components/Header";
import RewardsPreview from "@/components/RewardsPreview";
import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Solana Pinball",
  description: "Pinball",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chakraPetch.className} antialiased`}>
        <Header />
        <main className="min-h-svh relative">{children}</main>
        <RewardsPreview />
      </body>
    </html>
  );
}
