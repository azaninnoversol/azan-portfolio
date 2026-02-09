import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Azan Khan | Frontend Developer Portfolio",
    template: "%s | Azan Portfolio",
  },
  description:
    "Azan Khan frontend developer, React developer, Next.js developer and web developer portfolio. Modern UI, responsive websites and web apps.",

  keywords: [
    "web developer",
    "frontend developer",
    "react developer",
    "next js developer",
    "javascript developer",
    "portfolio website",
    "ui developer",
    "frontend engineer",
    "Pakistan web developer",
  ],

  authors: [{ name: "Azan Khan" }],
  creator: "Azan Khan",
  metadataBase: new URL("https://portfolio-hafiz-azan.vercel.app/"),

  openGraph: {
    title: "Azan Khan Portfolio",
    description: "Frontend Developer, React Developer, Next.js Developer Portfolio.",
    url: "https://portfolio-hafiz-azan.vercel.app/",
    siteName: "Azan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/src/app/favicon.ico",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Azan Portfolio",
    description: "Frontend Developer Portfolio",
    images: ["/src/app/favicon.ico"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
