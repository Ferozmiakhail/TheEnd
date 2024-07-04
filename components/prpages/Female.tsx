"use client"
import React, { useState } from 'react';
import Image from "next/image";
import type { Metadata } from "next";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar, AiOutlineCloseCircle } from 'react-icons/ai';
import { AppDispatch, RootState } from "@/lib/store";
import {
  decrementQuantity, incrementQuantity
} from "@/lib/qty/qty.Slice";

interface Product {
  _id: string;
  name: string;
  image: Array<string>;
  slug: {
      current: string;
  };
  Sdetails: string;
  Ldetails: string;
  price: number;
  productcategory: string;
}

interface Props {
  _id: string;
  name: string;
  image: Array<string>;
  index: number;
  setindex: (index: number) => void;
  CType: string;
  setCType: (CType: string) => void;
  Sdetails: string;
  Ldetails: string;
  price: number;
  price2: number;
  stringC: Array<string>
  productcategory: string;
  moredetail: boolean;
  setmoredetail: (moredetail: boolean) => void;
  nosizewarn: boolean;
  setnosizewarn: (moredetail: boolean) => void;
  femaleSize: boolean, 
  setfemaleSize: (femaleSize: boolean) => void,
  toSizeSelect: string,
  settoSizeSelect: (toSizeSelect: string) => void,
  Warnmine: boolean, 
  setWarnmine: (Warnmine: boolean) => void,
  uncolor: boolean, 
  setuncolor: (uncolor: boolean) => void,
  donotbuyforcoat: boolean, 
  setdonotbuyforcoat: (donotbuyforcoat: boolean) => void
  hidecoat: boolean, 
  sethidecoat: (hidecoat: boolean) => void,
  iscoat: boolean, 
  setiscoat: (iscoat: boolean) => void,
  showcoat: boolean, 
  setshowcoat: (showcoat: boolean) => void,
  hidejew: boolean,
  getstok: number,
  getshoulder: number,
  getsleeve: number,
  getcollar: number,
  getchest: number,
  getlast: number,
  getpant: number,
  sSkirt: string,
   sleeve: string, 
   collar: string, 
   pocket: string, 
   pant: string, 
   dcollor: string,
   showColor: boolean, 
   setShowColor: (showColor: boolean) => void,
   products: Array<Product>,
   Product: any,
   handleBuyNowFe: any,
   isjew: boolean,
   setisjew: (isjew: boolean) => void,
   showjew: boolean,
   setshowjew: (showjew: boolean) => void,
   sizemPage: string,
  setsizemPage: (sizemPage: string) => void,
}

const Female = ({ sizemPage, setsizemPage, showjew, setshowjew, setisjew, hidejew, isjew, products, handleBuyNowFe, Product, showColor, setShowColor, dcollor, sSkirt, sleeve, collar, pocket, pant, getshoulder, getsleeve, getcollar, getchest, getlast, getpant, getstok, iscoat, showcoat, setshowcoat, setiscoat, hidecoat, sethidecoat, settoSizeSelect, uncolor, donotbuyforcoat, setdonotbuyforcoat, setuncolor, setWarnmine, Warnmine, femaleSize, setfemaleSize, toSizeSelect, nosizewarn, setnosizewarn, image, name, index, setindex, Sdetails, Ldetails, price, price2, stringC, productcategory, moredetail, setmoredetail }: Props) => {
  const dispatch = useDispatch();
  const qty = useSelector((state: RootState) => state.Quantity.quantity);
  const decQty = () => {
    dispatch(decrementQuantity());
  };

  const incQty = () => {
    dispatch(incrementQuantity());
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const Customesize = () => {
    if(getstok < 1 || getshoulder < 1 || getcollar < 1 || getchest < 1 || getsleeve < 1 || getpant < 1){
      setWarnmine(true); settoSizeSelect('NUN');
    }else if(getstok >= 1 && getshoulder >= 1 && getcollar >= 1 && getchest >= 1 && getsleeve >= 1 && getpant >= 1){
      setWarnmine(false); setnosizewarn(false); settoSizeSelect('mine');
    }
  }
  return (
//   <>
//   <div className="product-detail-container">
//         <div className='Product-first-part-detail-container'>
//   <div className="product-image-newest">
//     <div className="image-container">
//       <Image src={image[index] ? image[index] : image[0]} width={250} height={300} alt={name} className="product-detail-image" />
//     </div>
//     <div className="small-images-container">
//       {image?.map((item, i) => (
//         <Image 
//           key={i} 
//           src={item} 
//           width={250} 
//           className={i === index ? 'small-image selected-image' : 'small-image'}
//           onMouseEnter={() => setindex(i)}
//           height={300} 
//           alt={name} 
//           />
//       ))}
//     </div>
//   </div>
//   <div className="product-detail-desc">
//           <h1 className='new-desc'><p className='new-name changeallname'>{name}</p> <p className="new-price fonpriallchange"><p className='price-new-second-time'> ${price2} </p>  ${price}</p></h1>
//           <div className='more-prob'><h4 className='detailsallchange'>{ Sdetails }</h4><p onClick={() => setmoredetail(true)} className='Readmore moreallchange'> ...Full-details</p></div>
//           {moredetail &&
//   <div className="Size-wrapper">
//     <div className="size-Cw">
//       <div className="Size-container">
//       <button
//         type="button"
//         className="cart-heading color-cancel"
//         onClick={() => setmoredetail(false)}>
//           <AiOutlineLeft />
//           <p className="heading cancel-color-real back-detail-prob">Back</p>
//         </button>

//           <h4 className="product-detail-desc product-detail-desc-top">Details: </h4>
//           <p className="product-detail-desc">{Ldetails}</p>
//           <div className='color-scroller'>
//           </div>
//         </div>
//       </div>
//   </div>
//   }
//           <div className="quantity">
//             <h3>Quantity: </h3>
//             <p className="quantity-desc flex">
//               <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
//               <span className="num">{qty}</span>
//               <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
//             </p>
//           </div>
//           <div className='slug-product-info-container'>
//           </div>
//           <div className="buttons">
//             <button type="button" className="buy-now" onClick={handleBuyNowFe}>Buy Now</button>
//           </div>
//       <p className='dil'>2-4 Weeks Free Delivery</p>
//         </div>
//       </div>
//       <div className='sizing-shower-newest'>
//       <div className='sizing-shower-detail'>
//       {!nosizewarn && <p className='new-text-size'>Size</p>}
//       {nosizewarn && <p className='new-text-size red'>No size selected</p>}
//     <div>  
//       <button className={toSizeSelect === 'medium' ? 'info-size-selecter info-size-selecter-clicked info-size-slector-cliked-prob' : 'info-size-selecter info-size-slector-cliked-prob'} onClick={() => {settoSizeSelect('medium'); setWarnmine(false); setnosizewarn(false);}}>Free Size</button>
//   <button className={toSizeSelect === 'mine' ? 'info-size-selecter info-size-selecter-clicked info-size-slector-cliked-prob' : 'info-size-selecter info-size-slector-cliked-prob'} onClick={Customesize}>My size</button>
//   <button onClick={() => {if(isjew){if(hidejew){setdonotbuyforcoat(true)}else{setfemaleSize(true); setsizemPage('p1')}}else{setfemaleSize(true); setsizemPage('p1')}}} className={Warnmine ? 'info-size-selecter bg-greep' : 'info-size-selecter bg-green'}>Custom Size</button>
//   {Warnmine && <><div className='req-warn'>Required</div></>}
//   {donotbuyforcoat && <><div className='req-warn'>Please select your Jewellery</div></>}
//   {hidejew && <><div onClick={() => {if(isjew == true){ setisjew(false); setdonotbuyforcoat(false)}else{ setisjew(true)}}} className='coat-probab'><input type="checkbox" checked={isjew? true : false} /><p className='prefer-prob'>Prefer jewellery along</p></div>
//         <button disabled={!isjew} className={!isjew ? 'info-size-selecter bg-disabled' : 'info-size-selecter bg-green'} onClick={() => setshowjew(true)}>Select your jewellery</button></>}
//     {hidejew && <><div className='jew-photo-holder'><div onClick={() => {isjew && setshowjew(true);}} className='jew-photo-caller'><div className={!isjew ? 'jew-photo-marker' : 'jew-photo-marke'}></div></div></div></>}
//     {!hidejew && <><div className='coat-probab cartAdressWarn'>The jewellery has been selected</div></>}
// </div>
//       <div className='sizing-shower-detail sizing-shower-detail-Two'>
//         {toSizeSelect === 'medium'?
//           <>
//           <div className='flexer'><p className='f1'>Lenght: </p><p className='f2 fronet pfortthy'>{"Based On Clothe"}</p></div>
//           <div className='flexer'><p className='f1'>Shoulder: </p><p className='f2'>{"16"}</p></div>
//           <div className='flexer'><p className='f1'>Sleeve: </p><p className='f2'>{"22"}</p></div>
//           <div className='flexer'><p className='f1'>Waist: </p><p className='f2'>{"40"}</p></div>
//           <div className='flexer'><p className='f1'>Bust: </p><p className='f2'>{"43"}</p></div>
//           <div className='flexer'><p className='f1'>Pant length: </p><p className='f2'>{"None/38"}</p></div>
//           </>
//           :toSizeSelect === 'mine' &&
//           <>
//             <div className='flexer'><p className='f1'>Lenght: </p><p className='f2'>{getstok}</p></div>
//             <div className='flexer'><p className='f1'>Shoulder: </p><p className='f2'>{getshoulder}</p></div>
//             <div className='flexer'><p className='f1'>Sleeve: </p><p className='f2'>{getsleeve}</p></div>
//             <div className='flexer'><p className='f1'>Waist: </p><p className='f2'>{getcollar}</p></div>
//             <div className='flexer'><p className='f1'>Bust: </p><p className='f2'>{getchest}</p></div>
//             <div className='flexer'><p className='f1'>Pant length: </p><p className='f2'>{getpant}</p></div>
//             </>
//         }
//           </div>
//             </div>
//       </div>
// </div>
//     <div className="maylike-products-wrapper">
//         <h2>You may also like</h2>
//         <div className="marquee">
//           <div className="maylike-products-container track">
//             {products.map((item) => (
//               item.productcategory === "Female"? <Product key={item._id}
//               image={item.image}
//               name={item.name}
//               Sdetails={item.Sdetails}
//               price={item.price}
//               slug={item.slug} /> : ""
//             ))}
//           </div>
//         </div>
//     </div>    
//   </>


<>
      {/* <nav className='flex mt-[10px] ml-[15px] mr-[15px] justify-between'>
    <Back TiArrowBack={TiArrowBack} />
    <Guide RxVideo={RxVideo} />
  </nav> */}
      <div className="flex mt-[10px] ml-[20px] w-[98%] justify-center gap-1">
      {/* bg-[green] */}
       <section className='Images-Section w-[23%] flex justify-center'>
       <Image src={image[index] ? image[index] : image[0]} width={250} height={300} alt={'Guldo'} className="!w-[300px] !h-[360px] rounded-[15px] cursor-pointer bg-[#ebebeb]" />
       </section>
       {/* bg-[blue] */}
       <section className='w-[45%] flex justify-center'>
        <div  className='w-[90%]'>
        <div className='flex !w-[100%] justify-between'>
          <p className='font-[500] text-[32px] text-[#324d67]'>{name}</p>
          <div>
            <p className='font-[500] text-[23px] text-[#786c6c] line-through'>$282</p>
            <p className='font-[500] text-[23px] text-[#f02d34]'>$180</p>
          </div>
        </div>
        {/* <p className='font-[500] text-[16px] text-[#324d67]'>Great look jonbary</p> */}
        <div className='tr'>
        <button type="button" className={`collapsible ${isOpen ? 'active' : ''} `} onClick={toggleContent}>
            <div className='flex justify-between '>
              <div className='flex font-[500] text-[16px] text-[#324d67] '>{Sdetails}</div>
              <div className='flex items-center '>Show {isOpen? <>Less<AiOutlineMinus className='pl-[2px]' /></> : <>More<AiOutlinePlus className='pl-[2px]' /></>}</div>
            </div>
            <div>
          <div className="content w-[100%] " style={{ display: isOpen ? 'block' : 'none' }}>
            <p>{Ldetails}</p>
          </div>
        </div>
          </button>
          </div>
        <div className="quantity flex gap-[20px] mt-[20px]">
          <h3 className='font-[500] text-[18px] text-[#324d67]'>Quantity: </h3>
          <div className='flex '>
            <button className='border-[1px] border-solid border-[gray] pt-[4px] pb-[4px] pr-[12px] pl-[12px]' onClick={decQty}><AiOutlineMinus className='text-[#f02d34]' /></button>
            <p className='border-t-[1px] border-b-[1px] border-solid border-[gray] pt-[4px] pb-[4px] pr-[12px] pl-[12px]'>{qty}</p>
            <button className='border-[1px] border-solid border-[gray] pt-[4px] pb-[4px] pr-[12px] pl-[12px]' onClick={incQty}><AiOutlinePlus className='text-[#31a831]' /></button>
          </div>
          
          
          
          {/* <p className="quantity-desc flex">
            <span className="minus" onClick={decQty}></span>
            <span className="num">{qty}</span>
            <span className="plus" onClick={incQty}></span>
          </p> */}
        </div>
        <div className='mt-[40px] w-[200px]'>
            <button className='text-[18px] font-[500] p-[10px] w-[200px] text-[#fff] border-[none] bg-[#69bd45]'>Buy Now</button>
            <p className='text-[16px] text-[#324d67] text-center mt-[8px]'>2-4 Weeks Free Delivery</p>
          </div>
        </div>
       </section> 
       {/* // bg-[red] */}
       <section className='w-[24%] border-l-[1px] border-solid border-black pl-[20px]'>
        <div>
          <p className='text-[gray] text-center font-[500] text-[20px]'>size</p>
          <div>
            <p className='text-[black] text-center font-[400] text-[17px]' onClick={() => {settoSizeSelect('medium'); setWarnmine(false); setnosizewarn(false);}}>Free Size</p>
            <p className='text-[black] text-center font-[400] text-[17px]' onClick={Customesize}>My Size</p>
          </div>
          <button className='text-[#1db745] mb-[5px] border-[1px] border-solid border-[#1db745] h-[42px] ml-[5px] p-[2px] w-[100%] rounded-[8px] pointer bg-[none] text-[17px] font-[500]' onClick={() => {if(isjew){if(hidejew){setdonotbuyforcoat(true)}else{setfemaleSize(true); setsizemPage('p1')}}}}>Custom Size</button>
          <><div className='ml-[5px] mt-[5px] mb-[5px] pointer flex items-center'><input type="checkbox" checked={false} /><p className='mt-[0px] ml-[8px]'>Prefer jewellery along</p></div></>
          <button disabled={true} className={'info-size-selecter bg-disabled text-center'}>Select your jewellery</button>
          <><div className='jew-photo-holder'><div className='jew-photo-caller'><div className={'jew-photo-marker'}></div></div></div></>
          <div className='sizing-shower-detail sizing-shower-detail-Two'>
        {toSizeSelect === 'medium'?
          <>
          <div className='flexer'><p className='f1'>Lenght: </p><p className='f2 fronet pfortthy'>{"Based On Clothe"}</p></div>
          <div className='flexer'><p className='f1'>Shoulder: </p><p className='f2'>{"16"}</p></div>
          <div className='flexer'><p className='f1'>Sleeve: </p><p className='f2'>{"22"}</p></div>
          <div className='flexer'><p className='f1'>Waist: </p><p className='f2'>{"40"}</p></div>
          <div className='flexer'><p className='f1'>Bust: </p><p className='f2'>{"43"}</p></div>
          <div className='flexer'><p className='f1'>Pant length: </p><p className='f2'>{"None/38"}</p></div>
          </>
          :toSizeSelect === 'mine' &&
          <>
            <div className='flexer'><p className='f1'>Lenght: </p><p className='f2'>{getstok}</p></div>
            <div className='flexer'><p className='f1'>Shoulder: </p><p className='f2'>{getshoulder}</p></div>
            <div className='flexer'><p className='f1'>Sleeve: </p><p className='f2'>{getsleeve}</p></div>
            <div className='flexer'><p className='f1'>Waist: </p><p className='f2'>{getcollar}</p></div>
            <div className='flexer'><p className='f1'>Bust: </p><p className='f2'>{getchest}</p></div>
            <div className='flexer'><p className='f1'>Pant length: </p><p className='f2'>{getpant}</p></div>
            </>
        }
          </div>
        </div>
        
        <div></div>
        <div></div>
       </section>
      </div>
      </>


  // <>
  // <div className="flex mt-[10px] ml-[20px] w-[98%] justify-center gap-1">
  // {/* bg-[green] */}
  //  <section className='Images-Section w-[23%] flex justify-center'>
  //  <Image src={image[index] ? image[index] : image[0]} width={250} height={300} alt={name} className="!w-[300px] !h-[360px] rounded-[15px] cursor-pointer bg-[#ebebeb]" />
  //  </section>
  //  {/* bg-[blue] */}
  //  <section className='w-[40%] flex justify-center'>
  //   <div>
  //   <div className='flex !w-[100%]'>
  //     <p className='font-[500] text-[32px] text-[#324d67]'>{name}</p>
  //     <div>
  //       <p className='font-[500] text-[23px] text-[#786c6c] line-through'>${price2}</p>
  //       <p className='font-[500] text-[23px] text-[#f02d34]'>${price}</p>
  //     </div>
  //   </div>
  //   <p className='font-[500] text-[16px] text-[#324d67]'>{Sdetails}</p>
  //   <button type="button" className={`collapsible ${isOpen ? 'active' : ''}`} onClick={toggleContent}>
  //       <div className='flex justify-between'>
  //         <div className='flex'>{Sdetails}</div>
  //         <div className='flex items-center'>Show {isOpen? <>Less<AiOutlineMinus className='pl-[2px]' /></> : <>More<AiOutlinePlus className='pl-[2px]' /></>}</div>
  //       </div>
  //       <div>
  //     <div className="content w-[400px]" style={{ display: isOpen ? 'block' : 'none' }}>
  //       <p>{Ldetails}</p>
  //     </div>
  //   </div>
  //     </button>
  //   <div className="quantity">
  //     <h3 className='font-[500] text-[18px] text-[#324d67]'>Quantity: </h3>
  //     <div className='flex '>
  //       <button className='border-[1px] border-solid border-[gray] pt-[4px] pb-[4px] pr-[12px] pl-[12px]' onClick={decQty}><AiOutlineMinus className='text-[#f02d34]' /></button>
  //       <p className='border-t-[1px] border-b-[1px] border-solid border-[gray] pt-[4px] pb-[4px] pr-[12px] pl-[12px]'>{qty}</p>
  //       <button className='border-[1px] border-solid border-[gray] pt-[4px] pb-[4px] pr-[12px] pl-[12px]' onClick={incQty}><AiOutlinePlus className='text-[#31a831]' /></button>
  //     </div>
  //     <div>
  //       <button className='text-[18px] font-[500] p-[10px] w-[200px] text-[#fff] border-[none] bg-[#69bd45]'>Buy Now</button>
  //       <p className='text-[16px] text-[#324d67]'>2-4 Weeks Free Delivery</p>
  //     </div>
      
      
  //     {/* <p className="quantity-desc flex">
  //       <span className="minus" onClick={decQty}></span>
  //       <span className="num">{qty}</span>
  //       <span className="plus" onClick={incQty}></span>
  //     </p> */}
  //   </div>
  //   </div>
  //  </section> 
  //  {/* // bg-[red] */}
  //  <section className='w-[30%]'>
  //   3rd part
  //  </section>
  // </div>
  // </>
)
}

export default Female 
