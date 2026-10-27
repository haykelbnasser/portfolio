import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haykel Ben Nasser — Full-Stack Developer & IT Professional",
  description:
    "Developer and IT professional building practical software, reliable websites, and connected technical systems — from implementation to deployment. Based in Tunisia, open to positions in France and Europe.",
  openGraph: {
    title: "Haykel Ben Nasser — Developer & IT Professional",
    description:
      "Full-stack development, WordPress customization, business applications, and IT infrastructure. Open to developer positions in France and Europe.",
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
