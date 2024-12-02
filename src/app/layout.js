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
        <meta
          name="description"
          content="Softgroup.uz — Uzbekistan's leading IT outsourcing company. We provide top-quality web development, mobile applications, and IT solutions to help businesses thrive in the digital world."
        />
        <meta
          name="keywords"
          content="softgroup, softuz, soft, group, uz, uzbekistan, web development, mobile development, IT solutions, outsourcing, digital transformation, innovation"
        />
        <meta name="author" content="213-group" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Softgroup" />
        <meta
          property="og:description"
          content="Har qanday dasturlarni ishlab chiqamiz "
        />
        <meta
          property="og:image"
          content="https://www.softgroup.uz/website-image.png"
        />
        <meta property="og:url" content="https://www.softgroup.uz/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sizning saytingizning nomi" />
        <meta
          name="twitter:description"
          content="Saytning qisqa ta'rifi bu yerda bo'ladi."
        />
        <meta
          name="twitter:image"
          content="https://saytning-url.com/rasm.png"
        />
        <meta name="twitter:site" content="@SizningTwitterUsername" />
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
