import Head from "next/head";
import Footer from "../components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PassGuardx",
  description: "PassGuardx is the best and the most secure password manager available on the internet. It is created by Arnav Nagpurkar ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className="dark:bg-zinc-950 dark:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
