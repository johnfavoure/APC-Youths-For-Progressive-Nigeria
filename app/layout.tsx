import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APC Youth For Progressive Nigeria",
  description:
    "Official platform for APC Youth For Progressive Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
