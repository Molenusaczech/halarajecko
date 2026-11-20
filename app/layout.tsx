import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import PageLayout from "@/components/page-layout";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sportovní hala Ráječko",
  description: "Moderní sportovní a společenské centrum v Ráječku.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          role="status"
          className="bg-amber-100 px-4 py-3 text-center text-sm font-medium text-amber-950"
        >
          Tato stránka je momentálně ve vývoji.
        </div>
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}
