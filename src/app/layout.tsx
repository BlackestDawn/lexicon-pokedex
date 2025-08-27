import type { Metadata } from "next";
import { Jaldi, Jersey_10 } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/sectors/siteHeader";
import SiteFooter from "@/components/sectors/siteFooter";

const jaldi = Jaldi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jaldi",
  fallback: ["sans-serif"],
});

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Explore the world of Pokémon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jaldi.variable} ${jersey.variable} antialiased`}
      >
        <header>
          <SiteHeader />
        </header>

        <main>
          {children}
        </main>

        <footer>
          <SiteFooter />
        </footer>
      </body>
    </html>
  );
}
