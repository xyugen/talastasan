import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./lib/font";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import TransitionLoader from "@/components/transition-loader";

export const metadata: Metadata = {
  title: "TalasTasan",
  description:
    "Paglinang ng kasanayan sa pagbasa. Pagpapalawak ng bokabularyo.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "manifest",
      url: "/site.webmanifest",
    },
  },
  authors: [
    { name: "Renz Arias", url: "https://renzyx.is-a.dev" },
    { name: "Pagzone", url: "https://github.com/pagzone" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <TransitionLoader />
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
