import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionProvider from "@/context/active-section";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Behzad (Ben)'s Personal Portfolio",
  description: "Ben is a technical program / product manager with 8 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#fbe2f9] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-[#f7fbd7] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
        <div />
        <ActiveSectionProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="bottom-center" />
        </ActiveSectionProvider>
      </body>
    </html>
  );
};
