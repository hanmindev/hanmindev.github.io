import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

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
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-8 pb-20 xl:pb-0">
        <div className="z-10 w-full max-w-screen-lg items-center justify-between font-karla">
          {children}
        </div>
      </main>
      <Footer />
    </div>
    </body>
    </html>
  );
}
