import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Softgroup",
  description:
    "Softgroup.uz — Uzbekistan's leading IT outsourcing company. We provide top-quality web development, mobile applications, and IT solutions to help businesses thrive in the digital world.",
  img: "/favicon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.img} />
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
