import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Banner from "../components/banner/Banner";
import "../styles.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Labs Develop",
  description: "Labs Develop",
};

function LayoutBody({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Banner />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <LayoutBody>{children}</LayoutBody>
      </body>
    </html> 
  );
}

export { LayoutBody }; 