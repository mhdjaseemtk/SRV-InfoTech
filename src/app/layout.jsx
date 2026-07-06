import { Poppins, Mulish } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mulish",
});

export const metadata = {
  title: "Stree Shakthi | Empowering Kerala Women",
  description:
    "Stree Shakthi is the State Poverty Eradication and Women Empowerment Mission of the Government of Kerala.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${mulish.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
