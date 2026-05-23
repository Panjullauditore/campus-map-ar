import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { campusInfo } from "@/data/campus";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Campus Map AR",
    template: "%s | Campus Map AR",
  },
  description: `${campusInfo.name} — campus map web app with AR navigation coming soon`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-slate-950 font-sans text-slate-100 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
