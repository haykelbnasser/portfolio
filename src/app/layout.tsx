import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haykel Ben Nasser — Hybrid Developer & Problem Solver",
  description:
    "Full-Stack Development · Digital Solutions · IT Systems. Developer and IT professional building practical business applications, websites, and connected technical systems.",
  openGraph: {
    title: "Haykel Ben Nasser — Hybrid Developer & Problem Solver",
    description:
      "Full-Stack Development · Digital Solutions · IT Systems. Open to developer and technical positions in France and Europe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
