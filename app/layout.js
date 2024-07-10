import { Outfit } from "next/font/google";
import "./globals.css";

const outFit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Blog App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outFit.className}>{children}</body>
    </html>
  );
}
