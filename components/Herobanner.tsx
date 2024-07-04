import Image from 'next/image';
import logo from '../public/Logo.png'
import hero from '../public/Header.png'

const Herobanner = () => {
  return (
    <>
      <header>
        <div className="mx-[5px] py-[10px] px-[20px] bg-[#aabfb0] rounded-[8px] relative h-[180px] leading-[1.1] sm:mx-[10px] sm:py-[100px] sm:px-[40px] sm:rounded-[15px] sm:h-[260px] sm:leading-[1.1] md:mx-[10px] md:py-[100px] md:px-[40px] md:rounded-[15px] md:h-[390px] md:leading-[1.1] lg:mx-[10px] lg:py-[100px] lg:px-[40px] lg:rounded-[15px] lg:h-[470px] lg:leading-[1.1] xl:mx-[10px] xl:py-[100px] xl:px-[40px] xl:rounded-[15px] xl:h-[500px] xl:leading-[1.1] 2xl:mx-[20px] 2xl:py-[110px] 2xl:px-[50px] 2xl:rounded-[15px] 2xl:h-[570px] 2xl:leading-[1.2]">
          <div className='ml-[-10px] sm:ml-[-30px] md:ml-[-30px] lg:ml-[-30px] xl:ml-[-30px] 2xl:ml-[-30px]'>
            <Image src={logo} width={400} height={248} alt="Poshak-Logo" className='h-[40px] w-[65px] mt-[-5px] sm:h-[62px] sm:w-[100px] sm:mt-[-95px] md:h-[80px] md:w-[130px] md:mt-[-90px] lg:h-[80px] lg:w-[130px] lg:mt-[-90px] xl:h-[80px] xl:w-[130px] xl:mt-[-90px] 2xl:h-[100px] 2xl:w-[162px] 2xl:mt-[-100px]' />
          </div>
          <div className='pt-[20px] sm:pt-[30px] md:pt-[60px] lg:pt-[60px] xl:pt-[60px] 2xl:pt-[60px]'>
            <p className="text-[18px] ml-[0px] mt-[0px] sm:text-[22px] sm:ml-[0px] sm:mt-[0px] md:text-[27px] md:ml-[0px] md:mt-[0px] lg:text-[27px] lg:ml-[1px] lg:mt-[0px] xl:mb-[-4px] xl:text-[27px] xl:ml-[2px] xl:mt-[0px] 2xl:text-[34px] 2xl:ml-[2px] 2xl:mt-[0px]">High Quality</p>
            <h3 className='text-[1.4rem] mt-[2px] font-[500] sm:text-[2rem] sm:mt-[2px] sm:text-[500] md:text-[3rem] md:mt-[4px] md:text-[500] lg:text-[3.6rem] lg:mt-[4px] lg:text-[500] xl:text-[4rem] xl:mt-[-4px] xl:text-[500] 2xl:text-[5rem] 2xl:mt-[0px] 2xl:text-[500]'>Free Delivery</h3>
            <h1 className='text-white text-[3em] ml-[-10px] uppercase font-[500] sm:text-[5em] sm:ml-[-18px] sm:font-[500] md:text-[7em] md:ml-[-20px] md:font-[500] lg:text-[8.5em] lg:ml-[-20px] lg:font-[500] xl:text-[10em] xl:ml-[-20px] xl:mt-[-30px] xl:font-[500] 2xl:text-[12em] 2xl:ml-[-20px] 2xl:font-[500]'>Poshak</h1>
            <Image alt='Gand-Afghani' src={hero} height={200} width={200} className='absolute top-2 right-[1%] w-[90px] h-[100px] sm:top-2 sm:right-[1%] sm:w-[140px] sm:h-[150px] md:top-7 md:right-[1%] md:w-[320px] md:h-[330px] lg:top-0 lg:right-[7%] lg:w-[440px] lg:h-[438px] xl:top-0 xl:right-[14%] xl:w-[482px] xl:h-[480px] 2xl:top-4 2xl:right-[8%] 2xl:w-[540px] 2xl:h-[530px]' />
            <div>
              <div className="desc">
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Herobanner
