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
   CoProduct: any,
   isjew: boolean,
   setisjew: (isjew: boolean) => void,
   showjew: boolean,
   setshowjew: (showjew: boolean) => void,
   maleSizeT: boolean, 
   setmaleSizeT: (maleSizeT: boolean) => void,
   gethip: number,
   getblouse: number,
   getdotpoint: number,
   handleBuyNowMT: any,
}

const Cotton = ({ products, getdotpoint, getblouse, gethip, maleSizeT, setmaleSizeT, showjew, setshowjew, setisjew, hidejew, isjew, handleBuyNowMT, CoProduct, showColor, setShowColor, dcollor, sSkirt, sleeve, collar, pocket, pant, getshoulder, getsleeve, getcollar, getchest, getlast, getpant, getstok, iscoat, showcoat, setshowcoat, setiscoat, hidecoat, sethidecoat, settoSizeSelect, uncolor, donotbuyforcoat, setdonotbuyforcoat, setuncolor, setWarnmine, Warnmine, femaleSize, setfemaleSize, toSizeSelect, nosizewarn, setnosizewarn, image, name, index, setindex, Sdetails, Ldetails, price, price2, stringC, productcategory, moredetail, setmoredetail }: Props) => {
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
<div className="product-detail-container-newber">
    <div className="product-image-newest-thenewer-andnewrer-mader">
    <div className="product-image-newest-bnew">
    <div className="image-container">
      <Image src={image[index] ? image[index] : image[0]} width={250} height={300} alt={name} className="product-detail-image-newgiver-new" />
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
        <div className='Product-first-part-detail-container Product-first-part-detail-container-newer-new-newr helpmealot'>
  <div className="product-detail-desc helpmemore">
          <h1 className='new-desc'><p className='new-name name-help-container namecochange'>{name}</p></h1>
          <div className='more-prob more-prob-thick moreprob-help'><h4 className='more-prob-thick getting-help smalchangeco'>{ Sdetails }</h4><span onClick={() => setmoredetail(true)} className='Readmore readmore-help readchangeco'> ...Full-details</span></div>
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
          </div>
          <div className='slug-product-info-container'>
          </div>
          <div className="buttons button-help">
            <h2 className="help-whatsapp helpcochange">Whatsapp for price</h2>
          </div>
          <div className="buttons button-help">
            <h2 className="help-whatsapp numbercochange">+93 79 436 4426</h2>
          </div>
      <p className='dil help-dil delcochange'>2-4 Weeks Free Delivery</p>
        </div>
      </div>
      
</div>
    <div className="maylike-products-wrapper">
        <h2 className="likecochange">You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              item.productcategory === "Cotton"? <CoProduct
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

export default Cotton 
