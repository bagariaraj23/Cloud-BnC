import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Cloud-BnC",
  description: "Bikes and Cars Rentals",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>{children}</body>
    </html>
  );
}