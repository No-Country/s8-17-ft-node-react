import { Navbar, Footer } from "@/components";
import ReactQueryProvider from "@/utils/provider";
import "./globals.css";
import { comissioner, poppins } from "@/styles/fonts";

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
          <main className="w-full h-full">{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
