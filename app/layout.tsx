import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';
import '../public/fonts/nexa-bold.css';
import { Footer } from "@/components/index"
// import { Layout } from '@/components/index';
// import { Toaster } from 'react-hot-toast';


export const metadata: Metadata = {
  title: "Poshak ",
  description: "Poshak is the premier destination for afghan clothing worldwide. Recognizing that many Afghans reside in various countries across the globe, our buisiness aims to facilitate those who wish to maintain theie cultural clothing traditions, no matter where they live, there's need to wait for friends or relatives to travel to Afghanistan to bring back traditional Afghani clothes, we proudly export all types of Afghani attire to every corner of the world. Our unique selling point is our collition of Afghani Gand, some of wich features exquisite handmade needlework by kuchi women, a tradition that dates back over 50 and a century . The chest part of Kuchi Gand Afghani is meticulously handcrafted, adding a touch of authenticity and heritage to our clothing. in addition to offering the finest quality Afghani clothes in market, poshak also provides home delivery and customization service. We stirve to offer our cistomers the most campetitve prices for our high-quality products. Experience the rich tradition of Afghan apprel with poshak, your global market place for Afghan clothing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
{/*       <Head><link href="https://fonts.cdnfonts.com/css/nexa-bold" rel="stylesheet" /></Head> */}
{/*       <Toaster /> */}
  
      
      <body className="min-h-screen bg-[#fff]">{children}<Footer /></body>
      
    </html>
  );
}
