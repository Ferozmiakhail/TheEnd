"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FcAbout } from "react-icons/fc";
import { PiVideoFill } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai"

const Navbar = () => {
  const myFunction = () => {
    document.getElementById("myDropdown")?.classList.toggle("show");
  }
  return (
    <nav className="flex-center top-0 z-50 w-full border-b-2 border-black-200 bg-gray-7 py-[8px] text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/About.tsx">
          {/* <Image src='/jsm-logo.svg' width={55} height={40} alt='JSM logo' /> */}
          <div className='flex'><FcAbout className='h-[30px] w-[30px]' /><div className='text-center h-full ml-[5px] mt-[2px]'>About us</div></div>
        </Link>

        <Image 
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Hamburger menu"
          className="block md:hidden"
        />

        {/* <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link
              href="https://jsmastery.pro/next13"
              target="_blank"
            >
              Next.js 13.4 Course
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link
              href="https://jsmastery.pro/masterclass"
              target="_blank"
            >
              Masterclass
            </Link>
          </li>
        </ul> */}

        <Link href="/About.tsx">
          {/* <Image src='/jsm-logo.svg' width={55} height={40} alt='JSM logo' /> */}
          <div className='flex'>
            <PiVideoFill className='h-[30px] w-[30px]' />
            
            <div className="dropdown relative inline-block">
              <div className="dropbtn-h ml-[5px] divide-solid border-[1px] divide-[#dddddd8c] p-[0px] cursor-pointer flex justify-center items-center bg-[#fff]">
                <button onClick={myFunction} className="dropbtn bg-white divide-none p-[5px]">How to buy</button>
                <AiFillCaretDown className="dropbtn-b " />
              </div>
              <div id="myDropdown" className="dropdown-content hidden absolute z-[1]">
                <a href="#" className="pr-[3px] pl-[3px] pt-[4px] pb-[4px] border-[1px] divide-solid divide-[#dddddd8c] block bg-white w-[120px]" >Men Kameez</a>
                <a href="#" className="pr-[3px] pl-[3px] pt-[4px] pb-[4px] border-[1px] divide-solid divide-[#dddddd8c] block bg-white w-[120px]" >Gand Afghani</a>
                <a href="#" className="pr-[3px] pl-[3px] pt-[4px] pb-[4px] border-[1px] divide-solid divide-[#dddddd8c] block bg-white w-[120px]" >Party Dress</a>
              </div>
            </div>

          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar