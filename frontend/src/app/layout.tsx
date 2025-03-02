import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles.scss";
import Banner from "./components/banner/Banner";

const outfit = Outfit({subsets: ["latin"],});

export const metadata: Metadata = {
  title: "Ecommerce Strapi",
  description: "Ecommerce Strapi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Banner/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html> 
  );
}
