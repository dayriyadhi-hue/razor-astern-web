import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Razan Aeterna Solusi | Ahli Perizinan & Regulasi Bisnis",
  description: "Solusi perizinan terpercaya di Indonesia. Kami membantu pengurusan PI, SNI, TKDN, dan regulasi lainnya dengan layanan profesional dan personal.",
  keywords: ["perizinan impor", "SNI", "TKDN", "regulasi bisnis Indonesia", "PT Razan Aeterna Solusi"],
  authors: [{ name: "PT Razan Aeterna Solusi" }],
  openGraph: {
    title: "Razan Aeterna Solusi | Mitra Perizinan Bisnis Anda",
    description: "Layanan pengurusan perizinan impor (PI), SNI, dan TKDN terpercaya dan transparan.",
    url: "https://razansolusi.com",
    siteName: "Razan Aeterna Solusi",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Razan Aeterna Solusi",
    description: "Solusi perizinan dan regulasi bisnis profesional di Indonesia.",
  },
  icons: {
    icon: "/RAS Icon.svg",
    apple: "/RAS Icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
