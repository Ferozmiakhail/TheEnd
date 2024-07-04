import { IoLogoWhatsapp } from 'react-icons/io';
const Footer = () => {

  return (
    <>
        <footer className="text-[#324d67] text-[12px] text-center mt-[2px] py-[5px] px-[10px] font-[700] flex flex-col items-center gap-[0px] justify-center sm:text-[20px] sm:mt-[2px] sm:py-[5px] sm:px-[10px] sm:font-[700] sm:gap-[0px] md:text-[20px] md:mt-[5px] md:py-[10px] md:px-[10px] md:font-[700] md:gap-[0px] lg:text-[20px] lg:mt-[5px] lg:py-[10px] lg:px-[10px] lg:font-[700] lg:gap-[0px] xl:text-[20px] xl:mt-[10px] xl:py-[20px] xl:px-[10px] xl:font-[700] xl:gap-[5px] 2xl:text-[20px] 2xl:mt-[20px] 2xl:py-[30px] 2xl:px-[10px] 2xl:font-[700] 2xl:gap-[10px]">
            <p> &#169; copywrite poshak org  </p>
            <p>f.miakhail@gmail.com</p>
            <p className="text-[18px] flex gap-[10px] sm:text-[30px] sm:gap-[10px] md:text-[30px] md:gap-[10px] lg:text-[30px] lg:gap-[10px] xl:text-[30px] xl:gap-[10px] 2xl:text-[30px] 2xl:gap-[10px]">
                <IoLogoWhatsapp className='mt-[5px] sm:mt-[8px] md:mt-[8px] lg:mt-[8px] xl:mt-[8px] 2xl:mt-[8px]' /> +93 (0) 794364426
            </p>
        </footer>
    </>
  )
}

export default Footer