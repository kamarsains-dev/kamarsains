import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import InfoBar from "@/components/infobar";
import { Header } from "./header";

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

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <html lang="en">
      <body
        className={font.className}
      >
        <InfoBar/>
        <Header/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}