import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Banner from "../components/banner/Banner";
import "../styles.scss";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Ecommerce Strapi",
  description: "Ecommerce Strapi",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Banner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html> 
  );
}