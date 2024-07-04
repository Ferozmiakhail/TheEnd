import React from "react";
import Link from 'next/link';
import { AiOutlineLeft } from "react-icons/ai";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poshak-About ",
  description: "Poshak is the premier destination for afghan clothing worldwide. Recognizing that many Afghans reside in various countries across the globe, our buisiness aims to facilitate those who wish to maintain theie cultural clothing traditions, no matter where they live, there's need to wait for friends or relatives to travel to Afghanistan to bring back traditional Afghani clothes, we proudly export all types of Afghani attire to every corner of the world. Our unique selling point is our collition of Afghani Gand, some of wich features exquisite handmade needlework by kuchi women, a tradition that dates back over 50 and a century . The chest part of Kuchi Gand Afghani is meticulously handcrafted, adding a touch of authenticity and heritage to our clothing. in addition to offering the finest quality Afghani clothes in market, poshak also provides home delivery and customization service. We stirve to offer our cistomers the most campetitve prices for our high-quality products. Experience the rich tradition of Afghan apprel with poshak, your global market place for Afghan clothing.",
};

const Page = () => {
    return (
        <>
            <nav className="flex-center top-0 z-50 w-full bg-black-100 py-1 text-black">
                <div className="flex-between mx-auto w-full px-1 xs:px-1 sm:px-3">
                    <Link prefetch href="/">
                        <div className='flex'>
                            <AiOutlineLeft className='h-[22px] w-[22px] mt-[3px] sm:h-[25px] sm:w-[25px] sm:mt-[2px] md:h-[30px] md:w-[30px] md:mt-[2px] lg:h-[35px] lg:w-[35px] lg:mt-[3px] xl:h-[35px] xl:w-[35px] xl:mt-[3px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mt-[2px]' />
                            <div className='pointer text-center text-[18px] font-[500] h-full ml-[-4px] mt-[0px] sm:ml-[-6px] sm:mt-[0px] sm:text-[18px] sm:font-[500] md:ml-[-8px] md:mt-[2px] md:text-[20px] md:font-[500] lg:ml-[-8px] lg:mt-[4px] lg:text-[22px] lg:font-[500] xl:ml-[-8px] xl:mt-[4px] xl:text-[22px] xl:font-[500] 2xl:ml-[1px] 2xl:mt-[5px] 2xl:text-[24px]'>Close</div>
                        </div>
                    </Link>
                </div>
            </nav>
            <section className="px-[10px] py-[0px] sm:px-[20px] md:px-[40px] lg:px-[60px] xl:px-[60px] 2xl:px-[100px]">
                <h1 className="text-[28px] font-[500] sm:font-[500] sm:text-[28px] md:font-[500] md:text-[30px] lg:font-[500] lg:text-[32px] xl:font-[500] xl:text-[32px] 2xl:font-[500] 2xl:text-[36px]">Poshak</h1>
                <h3 className="text-[15px] text-justify leading-6 sm:leading-5 sm:text-[16px] md:text-[17px] md:leading-5 lg:text-[18px] lg:leading-6 xl:text-[18px] xl:leading-6 2xl:text-[18px] 2xl:leading-6">Poshak is the premier destination for afghan clothing worldwide. Recognizing that many Afghans reside in various countries across the globe, our buisiness aims to facilitate those who wish to maintain theie cultural clothing traditions, no matter where they live, there's need to wait for friends or relatives to travel to Afghanistan to bring back traditional Afghani clothes, we proudly export all types of Afghani attire to every corner of the world. Our unique selling point is our collition of Afghani Gand, some of wich features exquisite handmade needlework by kuchi women, a tradition that dates back over 50 and a century . The chest part of Kuchi Gand Afghani is meticulously handcrafted, adding a touch of authenticity and heritage to our clothing. in addition to offering the finest quality Afghani clothes in market, poshak also provides home delivery and customization service. We stirve to offer our cistomers the most campetitve prices for our high-quality products. Experience the rich tradition of Afghan apprel with poshak, your global market place for Afghan clothing.</h3>
            </section>
            <div className="w-full flex justify-center items-center h-full mt-[0px]">
                <Image alt="Poshak-logo" src="/Logo.png" priority className="h-[173.6px] w-[280px] sm:h-[248px] sm:w-[400px] md:h-[248px] md:w-[400px] lg:h-[248px] lg:w-[400px] xl:h-[248px] xl:w-[400px] 2xl:h-[248px] 2xl:w-[400px]" height={200} width={200} />
            </div>
        </>
    )
}

export default Page
