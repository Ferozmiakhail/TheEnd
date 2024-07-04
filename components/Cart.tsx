"use client"
import React, { useRef } from 'react';
import getStripe from '@/lib/getStripe';
import { useGenerationStore } from '@/state/idea-generation';
import Image from "next/image";
import { AiOutlineLeft, AiOutlineMinus, AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';
import { TiDeleteOutline } from 'react-icons/ti'
interface Productb {
  _id: string;
  name: string;
  image: Array<string>;
  price: number;
  quantity: number;
  }
  interface Props {
  showCart: boolean;
  setShowCart: (showCart: boolean) => void;
  onremove: any;
  uncolor: boolean,
  AiOutlinePlus: any,
  }

interface CartItem {
  _id: any;
  name: string;
  image: string[];
  Sdetails: string;
  Ldetails: string;
  price: number;
  price2: number;
  stringC: string[],
  productcategory: string;
  quantity: number;
  foundProduct: any;
  stock: number,
  shoulder: number,
  sleeve: number,
  collar: number,
  chest: number,
  hip: number,
  last: number,
  blouse: number,
  dotpoint: number,
  waistaround: number,
  BeltFit: number,
  hipLine: number,
  pant: number,
  sizeslect: string,
  sSkirt: string,
  sleevee: string,
  collare: string,
  pocket: string,
  pante: string,
  Cusian: string,
  color: string,
}

// const Cart: React.FC = () => {
  const Cart = ({ AiOutlinePlus, uncolor, onremove, showCart, setShowCart }: Props) => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { toggleCartItemQuantity, isjew, setisjew, hidecoat, sethidecoat, totalPrice, totalQuantities, cartItems, isLoading, hidejew, sethidejew, setIsLoading, CType, setCType, tabType, settabType, iscoat, setiscoat } = useGenerationStore()
  // cartItems: CartItem[]

  const handleCheckout = async () => {
    const stripe = await getStripe();

    try {
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      });

      if (!response.ok) {
        console.error('Failed to create stripe session:', response.statusText);
        return;
      }

      const data = await response.json();

      if (!data || !data.id) {
        console.error('Invalid response data:', data);
        return;
      }

      stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  // return (
  //   <div className="cart-wrapper" ref={cartRef}>
  //     <div className="cart-container">
  //       <div className="product-container">
  //         {cartItems.length >= 1 && cartItems.map((item) => (
  //           <div className="product" key={item._id}>
  //             <img src={item?.image[0]} className="cart-product-image" />
  //             <div className="item-desc">
  //               <div className="flex top">
  //                 <h5>{item.name}</h5>
  //                 <h4>${item.price}</h4>
  //               </div>
  //               <div className="flex bottom">
  //                 <div>
  //                   <p className="quantity-desc">
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       {cartItems.length >= 1 && (
  //         <div className="cart-bottom">
  //           <div className="total">
  //             <h3>Subtotal:</h3>
  //           </div>
  //           <div className="btn-container">
  //             <button type="button" className="btn" onClick={handleCheckout}>
  //               Pay with Stripe
  //             </button>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );

  return (
    <>
<div onClick={() => setShowCart(false)}>back</div>
{cartItems.map((itemd) => itemd.productcategory === "Male" || itemd.productcategory === "MaleT" || itemd.productcategory === "MaleG" ?
<div className="cartCd" key={itemd._id}>
{
!uncolor &&
<div className="cart-wrapper" ref={cartRef}>
<div className="cart-container cart-containerprob-prob">
{cartItems.length >= 1 && cartItems.map((itemp) => (
<button
key={itemp._id}
type="button"
className={itemp.productcategory === "Coat" ? "remove-item hide-remove-cart" : itemp.productcategory === "Jewellery" ? "remove-item hide-remove-cart" : "remove-item"}
onClick={() => {onremove(itemp); setShowCart(false)}}
>
<TiDeleteOutline className='remove-svg' />
<p className='correct'>Cancel purchase</p>
<div onClick={() => setShowCart(false)}>back</div>
<p className='correct'>{itemp.stock}</p>
<p>{itemp.sizeslect}</p>
<p className='correct'>{itemp.shoulder}</p>
</button>
))}
{cartItems.length < 1 && (
<div className="empty-cart">
<AiOutlineShopping size={150} />
<h3>Your shopping bag is empty</h3>
<Link href="/">
<button
type="button"
onClick={() => setShowCart(false)}
className="btn"
>
Continue Shopping
</button>
</Link>
</div>
)}
<div className="product-container">
{cartItems.length >= 1 && cartItems.map((item) => (
<>
<div className="product" key={item._id}>
<img src={item.image[0]} className="cart-product-image" />
<div className="item-desc Desc-cart-item-prob">
<div className="flex top unflex">
<h5>{item.name}</h5>
<h4 className='price-unflex'>${item.price}</h4>
</div>
<div className="flex bottom">
<div>
{item.productcategory === "Cushion" ? <p></p> : <p className="quantity-desc ok-disc">
<span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec') }>
<AiOutlineMinus />
</span>
<span className="num">{item.quantity}</span>
<span className="plus" onClick={() => toggleCartItemQuantity(item._id, 'inc') }><AiOutlinePlus /></span>
</p>}
</div>
<button
type="button"
className={item.productcategory === "Coat" ? "remove-item" : item.productcategory === "Jewellery" ? "remove-item" : "remove-item hide-remove-cart"}
onClick={() => {onremove(); sethidecoat(true); sethidejew(true);}}
>
<TiDeleteOutline className='remove-svg' />
</button>
<p className='correct'>{item.stock}</p>
<p className='correct'>{item.sSkirt}</p>
<p className='correct'>{item.color}</p>
</div>
</div>
</div>
</>
))}
<>
<div className='g-sp'>
<div className='f-sp'>
<div className='f-sp-full'>
<p className='f-start'>
{cartItems.length >= 1 && (
<div className="cart-bottom">
<div className="total">
<h3>Subtotal:</h3>
<h3>${totalPrice}</h3>
</div>
<div className="pay-btn-container">
<button type="button" className="btn" onClick={handleCheckout}>
Pay with Stripe
</button>
</div>
</div>
)}
</p><p className='f-end'></p>
</div>
</div>
</div>
</>
</div>
</div>
</div>
}
</div>
:
<div className="cartCd" key={itemd._id}>
<div className="cart-wrapper" ref={cartRef}>
<div className="cart-container cart-containerprob-prob">
{cartItems.length >= 1 && cartItems.map((itemp) => (
<button
key={itemp._id}
type="button"
className={itemp.productcategory === "Coat" ? "remove-item hide-remove-cart" : itemp.productcategory === "Jewellery" ? "remove-item hide-remove-cart" : "remove-item"}
onClick={() => {onremove(itemp); sethidecoat(true); sethidejew(true); setShowCart(false)}}
>
<TiDeleteOutline className='remove-svg' />
<p className='correct'>Cancel purchase</p>
<p className='correct'>{itemp.stock}</p>
<p>{itemp.sizeslect}</p>
<p className='correct'>{itemp.chest}</p>
</button>
))}
<div onClick={() => setShowCart(false)}>back</div>
{cartItems.length < 1 && (
<div className="empty-cart">
<AiOutlineShopping size={150} />
<h3>Your shopping bag is empty</h3>
<Link href="/">
<button
type="button"
onClick={() => setShowCart(false)}
className="btn"
>
Continue Shopping
</button>
</Link>
</div>
)}
<div className="product-container">
{cartItems.length >= 1 && cartItems.map((item) => (
<>
<div className="product" key={item._id}>
<img src={item.image[0]} className="cart-product-image" />
<div className="item-desc Desc-cart-item-prob">
<div className="flex top unflex">
<h5>{item.name}</h5>
{/* { item.productcategory === "Cotton" ? <h4 className='price-unflex'>${preferdoorcotton ? realprice ? (item.price * getquantity) + (item.price15 * getdoorquantity) :firstprice ? ((item.price + item.price13) * (getquantity)) + (item.price15 * getdoorquantity) :secondprice && ((item.price + item.price14) * (getquantity)) + (item.price15 * getdoorquantity) :!preferdoorcotton && realprice ? (item.price * getquantity) :firstprice ? ((item.price + item.price13) * (getquantity)) :secondprice && ((item.price + item.price14) * (getquantity))}</h4> : <h4 className='price-unflex'>${item.price}</h4>} */}
{ item.productcategory === "Cotton" ? <h4 className='price-unflex'>${item.price}</h4> : <h4 className='price-unflex'>${item.price}</h4>}
</div>
<div className="flex bottom">
<div>
{itemd.productcategory === "Cotton" ? <p className="quantity-desc ok-disc"></p> :
item.productcategory === "Cushion" ? <p></p> :<p className="quantity-desc ok-disc">
<span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec') }>
<AiOutlineMinus />
</span>
<span className="num">{item.quantity}</span>
<span className="plus" onClick={() => toggleCartItemQuantity(item._id, 'inc') }><AiOutlinePlus /></span>
</p>
}
</div>
<button
type="button"
className={item.productcategory === "Coat" ? "remove-item" : item.productcategory === "Jewellery" ? "remove-item" : "remove-item hide-remove-cart"}
onClick={() => {onremove(item); sethidecoat(true); sethidejew(true);}}
>
<TiDeleteOutline className='remove-svg' />
</button>
<p className='correct'>{item.stock}</p>
<p className='correct'>{item.sSkirt}</p>
<p className='correct'>{item.color}</p>
</div>
</div>
</div>
</>
))}
{ itemd.productcategory !== "Jewellery" &&
<>
</>
}
</div>
{cartItems.length >= 1 && (
<div className="cart-bottom">
{/* { itemd.productcategory === "Cotton" ? <div className="total"><h3>Subtotal:</h3><h3>${preferdoorcotton ? realprice ? (itemd.price * getquantity) + (itemd.price15 * getdoorquantity) :firstprice ? ((itemd.price + itemd.price13) * (getquantity)) + (itemd.price15 * getdoorquantity) :secondprice && ((itemd.price + itemd.price14) * (getquantity)) + (itemd.price15 * getdoorquantity) :!preferdoorcotton && realprice ? (itemd.price * getquantity) :firstprice ? ((itemd.price + itemd.price13) * (getquantity)) :secondprice && ((itemd.price + itemd.price14) * (getquantity))}</h3></div> : */}
{/* { itemd.productcategory === "Cotton" ? <div className="total"><h3>Subtotal:</h3><h3>${totalPrice}</h3></div> : */}
<div className="total">
<h3>Subtotal:</h3>
<h3>${totalPrice}</h3>
</div>
{/* } */}
<div className="pay-btn-container">
<button type="button" className="btn" onClick={handleCheckout}>
Pay with Stripe
</button>
</div>
</div>
)}
</div>
</div>
</div>
)}
</>
  );
};

export default Cart;
