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
  maleSize: boolean, 
  setmaleSize: (maleSize: boolean) => void,
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
   handleBuyNowM: any,
   sizemPage: string,
  setsizemPage: (sizemPage: string) => void,
}

const Male = ({ sizemPage, setsizemPage, products, handleBuyNowM, Product, showColor, setShowColor, dcollor, sSkirt, sleeve, collar, pocket, pant, getshoulder, getsleeve, getcollar, getchest, getlast, getpant, getstok, iscoat, showcoat, setshowcoat, setiscoat, hidecoat, sethidecoat, settoSizeSelect, uncolor, donotbuyforcoat, setdonotbuyforcoat, setuncolor, setWarnmine, Warnmine, maleSize, setmaleSize, toSizeSelect, nosizewarn, setnosizewarn, image, name, index, setindex, Sdetails, Ldetails, price, price2, stringC, productcategory, moredetail, setmoredetail }: Props) => {
  const dispatch = useDispatch();
  const qty = useSelector((state: RootState) => state.Quantity.quantity);
  const decQty = () => {
    dispatch(decrementQuantity());
  };

  const incQty = () => {
    dispatch(incrementQuantity());
  };
  const Customesize = () => {
    if(getlast < 1 || getstok < 1 || getshoulder < 1 || getsleeve < 1 || getcollar < 1 || getchest < 1 || getpant < 1 || collar !== 'collar1' && collar !== 'collar2' && collar !== 'collar3' || sleeve !== 'sleeve1' && sleeve !== 'sleeve2' || sSkirt !== 'skirt1' && sSkirt !== 'skirt2' || pant !== 'pant1' && pant !== 'pant2' && pant !== 'pant3' && pant !== 'pant4' || pocket !== 'pocket1' && pocket !== 'pocket2' )
      { setWarnmine(true); settoSizeSelect('NAN')}
    else if(getlast >= 1 && getstok >= 1 && getshoulder >= 1 && getsleeve >= 1 && getcollar >= 1 && getchest >= 1 && getpant >= 1)
      { setnosizewarn(false); setWarnmine(false); settoSizeSelect('mine');}
  }
  return (
  <>
  <>
    <div className="product-detail-container">
        <div className='Product-first-part-detail-container'>
        <div className="product-image-newest">
    <div className="image-container">
    <Image src={image[index] ? image[index] : image[0]} width={250} height={300} alt={name} />
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
            <button type="button" className="buy-now" onClick={handleBuyNowM}>Buy Now</button>
          </div>
      <p className='dil'>2-4 Weeks Free Delivery</p>
        </div>
        </div>
        <div className='sizing-shower-newest'>
      <div className='sizing-shower-detail'>
      {!nosizewarn && <p className='new-text-size'>Size</p>}
      {nosizewarn && <p className='new-text-size red'>No size selected</p>}
    <div>  
      <button className={toSizeSelect === 'small' ? 'info-size-selecter info-size-selecter-clicked info-size-slector-cliked-prob' : 'info-size-selecter info-size-slector-cliked-prob'} onClick={() => {setnosizewarn(false); settoSizeSelect('small')}}>Small</button>
        <button className={toSizeSelect === 'medium' ? 'info-size-selecter info-size-selecter-clicked info-size-slector-cliked-prob' : 'info-size-selecter info-size-slector-cliked-prob'} onClick={() => {setnosizewarn(false); settoSizeSelect('medium')}}>Medium</button>
        <button className={toSizeSelect === 'large' ? 'info-size-selecter info-size-selecter-clicked info-size-slector-cliked-prob' : 'info-size-selecter info-size-slector-cliked-prob'} onClick={() => {setWarnmine(false); settoSizeSelect('large')}}>Large</button>
        <button className={toSizeSelect === 'mine' ? 'info-size-selecter info-size-selecter-clicked info-size-slector-cliked-prob' : 'info-size-selecter info-size-slector-cliked-prob'} onClick={Customesize}>My size</button>
        <button onClick={() => {if(iscoat){if(hidecoat){setdonotbuyforcoat(true);}else{setmaleSize(true); setsizemPage('p1')}}else{setmaleSize(true); setsizemPage('p1')}}} className={Warnmine ? 'info-size-selecter bg-greep' : 'info-size-selecter bg-green'}>Custom Size</button>
        {Warnmine && <><div className='req-warn'>Required</div></>}
        <button className={uncolor ? 'info-size-selecter bg-greep' : 'info-size-selecter bg-green'} onClick={() => setShowColor(true)}>Choose Color&Design</button>
        {uncolor && <><div className='req-warn'>Required</div></>}
        {donotbuyforcoat && <><div className='req-warn'>Please select your Waist Coat</div></>}
        {hidecoat && <><div onClick={() => {if(iscoat == true){ setiscoat(false); setdonotbuyforcoat(false)}else{ setiscoat(true);}}} className='coat-probab'><input type="checkbox" checked={iscoat? true : false} /><p className='prefer-prob'>Prefer Waist-coat along</p></div>
        <button disabled={!iscoat} className={!iscoat ? 'info-size-selecter bg-disabled' : 'info-size-selecter bg-green'} onClick={() => setshowcoat(true)}>Select your Waist-coat</button></>}
        {hidecoat && <><div className='west-coat-photo-holder'><div onClick={() => {iscoat && setshowcoat(true);}} className='west-coat-photo-caller'><div className={!iscoat ? 'west-coat-photo-marker' : 'west-coat-photo-marke'}></div></div></div></>}
        {!hidecoat && <><div className='coat-probab cartAdressWarn'>The Waist-Coat has been selected</div></>}
</div>
      <div className='sizing-shower-detail sizing-shower-detail-Two'>
        {toSizeSelect === 'small'?
          <>
          <div className='flexer'><p className='f1'>Lenght: </p><p className='f2'>{"39"}</p></div>
          <div className='flexer'><p className='f1'>Shoulder: </p><p className='f2'>{"18"}</p></div>
          <div className='flexer'><p className='f1'>Sleeve: </p><p className='f2'>{"22"}</p></div>
          <div className='flexer'><p className='f1'>Collar: </p><p className='f2'>{"15"}</p></div>
          <div className='flexer'><p className='f1'>Chest: </p><p className='f2'>{"42"}</p></div>
          <div className='flexer'><p className='f1'>Waist: </p><p className='f2'>{"43"}</p></div>
          <div className='flexer'><p className='f1'>Pant length: </p><p className='f2'>{"40"}</p></div>
          </>
          :toSizeSelect === 'medium'?
          <>
          <div className='flexer'><p className='f1'>Lenght: </p><p className='f2'>{"43"}</p></div>
          <div className='flexer'><p className='f1'>Shoulder: </p><p className='f2'>{"19"}</p></div>
          <div className='flexer'><p className='f1'>Sleeve: </p><p className='f2'>{"24"}</p></div>
          <div className='flexer'><p className='f1'>Collar: </p><p className='f2'>{"16"}</p></div>
          <div className='flexer'><p className='f1'>Chest: </p><p className='f2'>{"42"}</p></div>
          <div className='flexer'><p className='f1'>Waist: </p><p className='f2'>{"43"}</p></div>
          <div className='flexer'><p className='f1'>Pant length: </p><p className='f2'>{"42"}</p></div>
          </>
          :toSizeSelect === 'large'?
          <>
          <div className='flexer'><p className='f1'>Lenght: </p><p className='f2'>{"46"}</p></div>
          <div className='flexer'><p className='f1'>Shoulder: </p><p className='f2'>{"21"}</p></div>
          <div className='flexer'><p className='f1'>Sleeve: </p><p className='f2'>{"25"}</p></div>
          <div className='flexer'><p className='f1'>Collar: </p><p className='f2'>{"17"}</p></div>
          <div className='flexer'><p className='f1'>Chest: </p><p className='f2'>{"43"}</p></div>
          <div className='flexer'><p className='f1'>Waist: </p><p className='f2'>{"43"}</p></div>
          <div className='flexer'><p className='f1'>Pant length: </p><p className='f2'>{"44"}</p></div>
          </>
          :toSizeSelect === 'mine' &&
          <>
            <div className='flexer'><p className='f1'>Lenght : </p><p className='f2'>{getstok}</p></div>
            <div className='flexer'><p className='f1'>Shoulder: </p><p className='f2'>{getshoulder}</p></div>
            <div className='flexer'><p className='f1'>Sleeve: </p><p className='f2'>{getsleeve}</p></div>
            <div className='flexer'><p className='f1'>Collar: </p><p className='f2'>{getcollar}</p></div>
            <div className='flexer'><p className='f1'>Chest: </p><p className='f2'>{getchest}</p></div>
            <div className='flexer'><p className='f1'>Waist: </p><p className='f2'>{getlast}</p></div>
            <div className='flexer'><p className='f1'>Pant length: </p><p className='f2'>{getpant}</p></div>
            <div className='top-hover'></div>
            <div className='flexer'><p className='f3'>Collar-Type: </p><p className='f4'>{collar === 'collar1'? "Pakistani":collar === 'collar2'? "Spread": collar === 'collar3' && "Shahbazi"}</p></div>
            <div className='flexer'><p className='f3'>Sleeve-Type: </p><p className='f4'>{sleeve === 'sleeve1'? "Rounded" :sleeve === 'sleeve2' && "Cuff"}</p></div>
            <div className='flexer'><p className='f3'>Skirt-Type: </p><p className='f4'>{sSkirt === 'skirt1'? "Cerved Cut" :sSkirt === 'skirt2' && "Squared Cut"}</p></div>
            <div className='flexer'><p className='f3'>Pant-Type: </p><p className='f4'>{pant === 'pant1'? "Normal":pant === 'pant2'? "Trouser":pant === 'pant3'? "Gabby" :pant === 'pant4' && "Gabby"}</p></div>
            <div className='flexer'><p className='f3'>Pocket-Type: </p><p className='f4 fronet pfortthy'>{pocket=== 'pocket1'? "Top-Pocket" :pocket === 'pocket2' && "Two-Sides-Pocket"}</p></div>
            </>
        }
<div className='flexer'><p className='f3'>Color: </p><p className='f4'>{" "}
{stringC.map((string, index) => <>{dcollor === `color${index}` && string}</>)}





</p></div>
          </div>
            </div>
      </div>
    </div>
    <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              item.productcategory === "Male"? <Product
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
    
  </>
)
}

export default Male
