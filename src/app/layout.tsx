import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import ErrorBoundary from "../../error-boundary/ErrorBoundary";

const poppins: NextFont = Poppins({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SDD Ghana",
  description: "Our mission is to be a catalyst for positive change, combining inclusive and sustainable development initiatives, research insights and policy influence.",
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head key={"head"}>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <ErrorBoundary>
        <body
          className={`${poppins.className} antialiased overflow-x-hidden scroll-smooth relative h-screen`}
        >
          <header className="relative">
            <Navbar />
          </header>
          {children}
          <Footer />
        </body>
      </ErrorBoundary>
    </html>
  );
}
