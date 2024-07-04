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
  Cusian: string,
  setCusian: (Cusian: string) => void,
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
   ProductCu: any,
   FcCheckmark: any,
   isjew: boolean,
   setisjew: (isjew: boolean) => void,
   showjew: boolean,
   setshowjew: (showjew: boolean) => void,
   maleSizeT: boolean, 
   setmaleSizeT: (maleSizeT: boolean) => void,
   gethip: number,
   getblouse: number,
   getdotpoint: number,
   handleBuyNowCus: any,
   cusainerrorofthequatntity: boolean,
   cusianwarn: boolean,

}

const Cushion = ({ FcCheckmark, cusianwarn, Cusian, setCusian, cusainerrorofthequatntity, products, getdotpoint, getblouse, gethip, maleSizeT, setmaleSizeT, showjew, setshowjew, setisjew, hidejew, isjew, handleBuyNowCus, ProductCu, showColor, setShowColor, dcollor, sSkirt, sleeve, collar, pocket, pant, getshoulder, getsleeve, getcollar, getchest, getlast, getpant, getstok, iscoat, showcoat, setshowcoat, setiscoat, hidecoat, sethidecoat, settoSizeSelect, uncolor, donotbuyforcoat, setdonotbuyforcoat, setuncolor, setWarnmine, Warnmine, femaleSize, setfemaleSize, toSizeSelect, nosizewarn, setnosizewarn, image, name, index, setindex, Sdetails, Ldetails, price, price2, stringC, productcategory, moredetail, setmoredetail }: Props) => {
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
    <div className="product-detail-container for-cusain-p-detail-container">
        <div className='Product-first-part-detail-container-for-cusain'>
  <div className="product-image-newest">
    <div className="image-container">
      <Image src={image[index] ? image[index] : image[0]} width={250} height={300} alt={name} className="product-detail-image-newgiver-new-for-cusain" />
    </div>
    <div className="small-images-container">
      {image?.map((item, i) => (
        <img 
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
      </div>
    </div>
    <div className="allitems-connecter">
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
          {cusainerrorofthequatntity && <><div className='redwarner'>You can not order this item less than 4 quantities</div></>}
          <div className='slug-product-info-container'>
          </div>
          <div className="buttons">
            <button type="button" className="buy-now" onClick={handleBuyNowCus}>Buy Now</button>
          </div>
      <p className='dil'>2-4 Weeks Free Delivery</p>
        </div>
        <div className='sizing-shower-newest'>
      <div className='sizing-shower-detail'>
      {!cusianwarn && <p className='new-text-size'>Pillow-Type</p>}
      {cusianwarn && <p className='new-text-size red'>Please choose your pillow type</p>}
    <div>  
        <div className={Cusian === 'Cusian1' ? 'info-size-selectercus info-size-selecter-clickedcus info-size-slector-cliked-probcus' : 'info-size-selectercus info-size-slector-cliked-probcus'} onClick={() => {setCusian('Cusian1'); setWarnmine(false);}}><div className='cusaionrece-photo-holder'><div className='cusaionreceone-photo-caller'>{Cusian === 'Cusian1' && <div className="mark-the-typescus"><FcCheckmark className="mark-of-the-typescus"/></div>}</div></div></div>
        <div className={Cusian === 'Cusian2' ? 'info-size-selectercus info-size-selecter-clickedcus info-size-slector-cliked-probcus' : 'info-size-selectercus info-size-slector-cliked-probcus'} onClick={() => {setCusian('Cusian2'); setWarnmine(false);}}><div className='cusaionrece-photo-holder'><div className='cusaionrecetwo-photo-caller'>{Cusian === 'Cusian2' && <div className="mark-the-typescus"><FcCheckmark className="mark-of-the-typescus"/></div>}</div></div></div>
        <div className={Cusian === 'Cusian3' ? 'info-size-selectercus info-size-selecter-clickedcus info-size-slector-cliked-probcus' : 'info-size-selectercus info-size-slector-cliked-probcus'} onClick={() => {setCusian('Cusian3'); setWarnmine(false);}}><div className='cusaionrece-photo-holder'><div className='cusaionrecethree-photo-caller'>{Cusian === 'Cusian3' && <div className="mark-the-typescus"><FcCheckmark className="mark-of-the-typescus"/></div>}</div></div></div>
</div>
            </div>
      </div>
      </div>
    <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              item.productcategory === "Cushion"? <ProductCu
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

export default Cushion 
