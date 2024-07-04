import React from 'react';
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
  suitSize: boolean, 
  setsuitSize: (suitSize: boolean) => void,
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
   isjew: boolean,
   setisjew: (isjew: boolean) => void,
   showjew: boolean,
   setshowjew: (showjew: boolean) => void,
   maleSizeT: boolean, 
   setmaleSizeT: (maleSizeT: boolean) => void,
   gethip: number,
   getblouse: number,
   getdotpoint: number,
   handleBuyNowS: any,
   getwaistaround: number,
   getBeltFit: number,
   gethipLine: number,
   sizemPage: string,
   setsizemPage: (sizemPage: string) => void,
}

const MaleT = ({ sizemPage, setsizemPage, setsuitSize, suitSize, gethipLine, getBeltFit, getwaistaround, products, getdotpoint, getblouse, gethip, maleSizeT, setmaleSizeT, showjew, setshowjew, setisjew, hidejew, isjew, handleBuyNowS, Product, showColor, setShowColor, dcollor, sSkirt, sleeve, collar, pocket, pant, getshoulder, getsleeve, getcollar, getchest, getlast, getpant, getstok, iscoat, showcoat, setshowcoat, setiscoat, hidecoat, sethidecoat, settoSizeSelect, uncolor, donotbuyforcoat, setdonotbuyforcoat, setuncolor, setWarnmine, Warnmine, toSizeSelect, nosizewarn, setnosizewarn, image, name, index, setindex, Sdetails, Ldetails, price, price2, stringC, productcategory, moredetail, setmoredetail }: Props) => {
  const dispatch = useDispatch();
  const qty = useSelector((state: RootState) => state.Quantity.quantity);
  const decQty = () => {
    dispatch(decrementQuantity());
  };

  const incQty = () => {
    dispatch(incrementQuantity());
  };
  return (
<>
<div className="product-detail-container">
        <div className='Product-first-part-detail-container'>
  <div className="product-image-newest">
    <div className="image-container">
      <Image src={image[index] ? image[index] : image[0]} width={250} height={300} alt={name} className="product-detail-image" />
    </div>
    <div className="small-images-container">
      {image?.map((item, i) => (
        <Image 
        key={i} 
        src={item} 
        width={250} 
        className={i === index ? 'small-image selected-image' : 'small-image'}
        onMouseEnter={() => setindex(i)}
        height={300} 
        alt={name} 
        />
      ))}
    </div>
  </div>
  <div className="product-detail-desc">
          <h1 className='new-desc'><p className='new-name'>{name}</p> <p className="new-price"><p className='price-new-second-time'> ${price2} </p>  ${price}</p></h1>
          <div className='more-prob more-prob-thick'><h4 className='more-prob-thick'>{ Sdetails }</h4><p onClick={() => setmoredetail(true)} className='Readmore'> ...Full-details</p></div>
      {moredetail &&
  <div className="Size-wrapper">
    <div className="size-Cw">
      <div className="Size-container">
      <button
        type="button"
        className="cart-heading color-cancel"
        onClick={() => setmoredetail(false)}>
          <AiOutlineLeft />
          <p className="heading cancel-color-real back-detail-prob">Back</p>
        </button>

          <h4 className="product-detail-desc product-detail-desc-top">Details: </h4>
          <p className="product-detail-desc">{Ldetails}</p>
          <div className='color-scroller'>
          </div>
        </div>
      </div>
  </div>
  }
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className='slug-product-info-container'>
          </div>
          <div className="buttons">
            <button type="button" className="buy-now" onClick={handleBuyNowS}>Buy Now</button>
          </div>
      <p className='dil'>2-4 Weeks Free Delivery</p>
        </div>
      </div>
      <div className='sizing-shower-newest'>
      <div className='sizing-shower-detail'>
      {!nosizewarn && <p className='new-text-size'>Size</p>}
      {nosizewarn && <p className='new-text-size red'>No size selected</p>}
    <div>
        <button className={toSizeSelect === 'mine' ? 'info-size-selecter info-size-selecter-clicked info-size-slector-cliked-prob' : 'info-size-selecter info-size-slector-cliked-prob'} onClick={() => {if(getshoulder < 1 || getcollar < 1 || getchest < 1 || getsleeve < 1 || getstok < 1 || getpant < 1 || gethipLine < 1 || gethip < 1 || getBeltFit < 1 || getwaistaround < 1 ){ setWarnmine(true); settoSizeSelect('nostuff')}else if(getwaistaround >= 1 && getBeltFit >= 1 && gethip >= 1 && gethipLine >= 1 && getpant >= 1 && getstok >= 1 && getsleeve >= 1 && getchest >= 1 && getcollar >= 1 && getshoulder >= 1){ setWarnmine(false); settoSizeSelect('mine'); setnosizewarn(false)}}}>My size</button>
           <button onClick={() => {setsuitSize(true); setsizemPage('p1')}} className={Warnmine ? 'info-size-selecter bg-greep' : 'info-size-selecter bg-green'}>Custom Size</button>
</div>
      <div className='sizing-shower-detail sizing-shower-detail-Two'>
        {toSizeSelect === 'mine' &&
          <>
            <div className='flexer'><p className='f1'>Chest Around: </p><p className='f2'>{getchest}</p></div>
            <div className='flexer'><p className='f1'>Shoulder: </p><p className='f2'>{getshoulder}</p></div>
            <div className='flexer'><p className='f1'>Sleeve: </p><p className='f2'>{getsleeve}</p></div>
            <div className='flexer'><p className='f1'>Coat Lenght: </p><p className='f2'>{getstok}</p></div>
            <div className='flexer'><p className='f1'>Waist Around: </p><p className='f2'>{getwaistaround}</p></div>
            <div className='flexer'><p className='f1'>Collar: </p><p className='f2'>{getcollar}</p></div>
            <div className='flexer'><p className='f1'>BeltFit: </p><p className='f2'>{getBeltFit}</p></div>
            <div className='flexer'><p className='f1'>HipLine: </p><p className='f2'>{gethipLine}</p></div>
            <div className='flexer'><p className='f1'>Hip: </p><p className='f2'>{gethip}</p></div>
            <div className='flexer'><p className='f1'>Trousers: </p><p className='f2'>{getpant}</p></div>
            </>
        }
          </div>
            </div>
      </div>
</div>
    <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              item.productcategory === "Suit"? <Product
              key={item._id}
              image={item.image}
              name={item.name}
              Sdetails={item.Sdetails}
              price={item.price}
              slug={item.slug}
            /> : ""
            ))}
          </div>
        </div>
    </div>
</>
)
}

export default MaleT 
