import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { ExternalLink } from "@/app/components/external_link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hanmin's Website",
  description: "Check out my work!"
};

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <div className="absolute flex flex-col w-full">
      <Header />
      <main className="flex min-h-svh flex-col items-center justify-between pt-24 px-8">
        <div className="z-10 w-full max-w-screen-lg items-center justify-between font-karla">
          {children}
        </div>
      </main>
      <div className="divider"></div>
      <div className="text-sm text-center mb-8 pb-16 xl:pb-0">
        This work by <ExternalLink href="https://hanmin.dev/">Hanmin Kim</ExternalLink> is licensed under
        a <ExternalLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Attribution-NonCommercial-ShareAlike
        4.0 International License</ExternalLink>. Copyright 2024 Hanmin Kim.
      </div>
      <Footer />
    </div>
    </body>
    </html>
  );
}
