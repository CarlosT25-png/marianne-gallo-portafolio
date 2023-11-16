import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: "Marianne Gallo | UX/UI Designer",
  openGraph: {
    type: 'website',
    title: 'Marianne Gallo | UX/UI Designer',
    url: 'https://mariannegallo.com',
    description: 'Marianne Gallo - Aspiring UX/UI designer crafting exceptional user experiences. Explore my portfolio of passion, creativity, and user-centric designs.'
  },
  keywords: 'UX/UI design, web design, graphic design, user experience, user interface, portfolio, designer, creative, passionate, dedicated',
  description:
    "Embark on a journey of design excellence with Marianne Gallo, an aspiring UX/UI designer dedicated to continuous learning and exceptional experiences. Explore a portfolio that reflects passion, creativity, and a commitment to crafting user-centric designs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
