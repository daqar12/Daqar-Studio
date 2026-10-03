import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "OMAL Studio | Capturing Timeless Moments",
  description: "Professional Luxury Media Studio specializing in Photography, Videography, Weddings, and Events.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
