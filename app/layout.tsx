import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Hydrate from "@/components/Hydrate";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mediterraneo",
  description: "The best place to eat Mediterranean",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-custom_background_white">
      <body className={inter.className} >
        <Hydrate>
          <Navigation />
          {children}
        </Hydrate>
      </body>
    </html>
  );
}
