import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "./fonts/inter-var.woff2",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-inter",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: "KB — Digital Strategist | UX Researcher | Storyteller",
  description:
    "Great storytelling moves people, in business and finance, it persuades, and in politics it inspires, in life it connects us.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} selection:bg-foreground selection:text-background`}>
        <Script src="/avery-console-capture.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
