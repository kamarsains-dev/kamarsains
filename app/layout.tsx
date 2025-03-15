import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const font = Space_Grotesk({
  variable: "--font-spacegrotesk",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kamar Sains",
  description: "Apapun Tentang Dunia!",
  icons: "/favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
