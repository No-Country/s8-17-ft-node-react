import { Navbar, Footer } from "@/components";
import "./globals.css";
import { Poppins, Commissioner } from "next/font/google";
import ReactQueryProvider from "@/utils/provider";

const poppins = Poppins({
  weight: ["500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins"
});

const comissioner = Commissioner({
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-comissioner"
});

// TODO: add metadata

export const metadata = {
  title: "CookMeal - Home",
  description: "Made for NoCountry"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${comissioner.variable} ${poppins.variable} ${poppins.className} w-full h-full`}
      >
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
