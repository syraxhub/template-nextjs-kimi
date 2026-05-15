import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Template Next.js App",
  description: "Frontend-first scaffold for vibe coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
