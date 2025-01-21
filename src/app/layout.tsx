import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import TransitionLoader from "@/components/transition-loader";
import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./lib/font";

export const metadata: Metadata = {
  title: {
    default: "TalasTasan",
    template: "%s | TalasTasan",
  },
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
  openGraph: {
    title: "TalasTasan",
    description:
      "Paglinang ng kasanayan sa pagbasa. Pagpapalawak ng bokabularyo.",
    url: "https://talastasan.vercel.app",
    siteName: "TalasTasan",
    type: "website",
    images: ["/opengraph.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Josh Daniel",
    card: "summary_large_image",
  },
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
