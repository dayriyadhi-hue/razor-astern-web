import { Plus_Jakarta_Sans, Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
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
    <html lang="id">
      <body
        className={`${plusJakarta.variable} ${inter.variable} ${dmSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
