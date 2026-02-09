import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  // title: "file",
  title: "Hafiz Azan | Portfolio",
  description: "Passionate Frontend Developer specializing in React.js, Next.js, Vue.js and React Native",
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
