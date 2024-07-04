"use client"
import React, { useState, useEffect, useRef } from 'react';
import { getproductbyslug, getProducts } from '@/sanity/actions'
import { Product, Back, Guide, LoadingPage, Cart, CoProduct, ProductCu } from '@/components/index';
import { Msize, Fsize, Ssize, FESsize, MTsize, MGsize, Csize } from '@/components/size/index';
import { Jew, Coa, Headboard, Jewellery, Suit, Coat, Male, Cushion, Female, Femalesecond, Femalefirst, Cotton, Femalefourth, MaleG, MaleT,} from '@/components/prpages/index';
import ReactPlayer from 'react-player';
import Image from "next/image";
import { useGenerationStore } from '@/state/idea-generation'
import { metadata } from "@/utils/metadata";
import { TiArrowBack } from 'react-icons/ti';
import { RxVideo } from 'react-icons/rx';
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping, AiFillStar, AiOutlineStar, AiOutlineCloseCircle } from 'react-icons/ai';
import { AppDispatch, RootState } from "@/lib/store";
import { TiDeleteOutline } from 'react-icons/ti';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  decrementQuantity, incrementQuantity
} from "@/lib/qty/qty.Slice";
import { FcCheckmark } from 'react-icons/fc';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
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

interface Productb {
  _id: string;
  name: string;
  image: Array<string>;
  Sdetails: string;
  Ldetails: string;
  price: number;
  price2: number;
  imageC: Array<string>; 
  stringC: Array<string>;
  productcategory: string;
  quantity: number;
}
interface all {
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
  quantity: number;
}
// export const revalidate = 900;

const Productpage = ({ params }: { params: { slug: string } }) => {
const [uncolor, setuncolor] = useState(false);
const [donotbuyforcoat, setdonotbuyforcoat] = useState(false);
// const [hidecoat, sethidecoat] = useState(true);
// const [iscoat, setiscoat] = useState(false);
const [showColor, setShowColor] = useState(false);
const [difcollor, setdifcollor] = useState(false);
// const [dcollor, setdcollor] = useState('');
const [dcollor, setdcollor] = useState('default'); // you did this for coat if it didnot work then call it back
const [warn, setwarn] = useState(false);
const [showcoat, setshowcoat] = useState(false);
const [warney, setwarney] = useState(false);
const [Warnmine, setWarnmine] = useState(false);
const [getstok, setgetstok] = useState(0); // ok
const [getshoulder, setgetshoulder] = useState(0); // ok
const [getsleeve, setgetsleeve] = useState(0);
const [getcollar, setgetcollar] = useState(0);
const [getchest, setgetchest] = useState(0);
const [gethip, setgethip] = useState(0);
const [getlast, setgetlast] = useState(0);
const [getblouse, setgetblouse] = useState(0);
const [getdotpoint, setgetdotpoint] = useState(0);
const [getwaistaround, setgetwaistaround] = useState(0);
const [getBeltFit, setgetBeltFit] = useState(0);
const [gethipLine, setgethipLine] = useState(0);
const [getpant, setgetpant] = useState(0);
const [toSizeSelect, settoSizeSelect] = useState('');
const [maleSize, setmaleSize] = useState(false);
const [maleSizeG, setmaleSizeG] = useState(false);
const [maleSizeT, setmaleSizeT] = useState(false);
const [femaleSize, setfemaleSize] = useState(false);
const [fesecSize, setfesecSize] = useState(false);
const [coatSize, setcoatSize] = useState(false);
const [suitSize, setsuitSize] = useState(false);
// const [isjew, setisjew] = useState(false);
const [glueimage, setglueimage] = useState(false);
const [limmitehegiht, setlimmitehegiht] = useState(false);
const dispatch = useDispatch();
const qty = useSelector((state: RootState) => state.Quantity.quantity);
const decQty = () => {
  dispatch(decrementQuantity());
};

const incQty = () => {
  dispatch(incrementQuantity());
};
const { hidejew, sethidejew, isjew, setisjew, hidecoat, sethidecoat, totalPrice, totalQuantities, cartItems, isLoading, setIsLoading, CType, setCType, tabType, settabType, iscoat, setiscoat } = useGenerationStore()
const addToCart = useGenerationStore((state) => state.addToCart);
const removecart = useGenerationStore((state) => state.removecart);
// const [sluger, setSluger] = useState<Productb | null>(null); // definded here donnot forget
const [sluger, setSluger] = useState<Productb>(Object); // definded here donnot forget
// const [sluger, setSluger] = useState<Product[]>([]);
const [nosizewarn, setnosizewarn] = useState(false);
const [allproducts, setAllProducts] = useState<all | null>(null);
const [moredetail, setmoredetail] = useState(false);
const [index, setIndex] = useState(0);
const [sizemPage, setsizemPage] = useState('p1');
const [sSkirt, setsSkirt] = useState('');
const [sleeve, setsleeve] = useState('');
const [collar, setcollar] = useState('');
const [pocket, setpocket] = useState('');
const [pant, setpant] = useState('');
const [Cusian, setCusian] = useState('')
// const [hidejew, sethidejew] = useState(true);
const [showjew, setshowjew] = useState(false);
const [cusianwarn, setcusianwarn] = useState(false);
const [cusiansizewarn, setcusiansizewarn] = useState(false);
const [limmitewidth, setlimmitewidth] = useState(false);
const [cusainerrorofthequatntity, setcusainerrorofthequatntity] = useState(false);
// const [products, setProducts] = useState<Product[] | null>(null); /// remember you edit it you should bring it back ok
const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
    const fetchData = async () => {
      const allProductsData = await getProducts();
      setProducts(allProductsData);
    };
    
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const productBySlug = await getproductbyslug(params.slug);
            const allProductsData = await getProducts();
      setSluger(productBySlug);
      setAllProducts(allProductsData);
    };
    
    fetchData();
  }, [params.slug]);
  const cartRef = useRef();
  const [showCart, setShowCart] = useState(false); // this one
    const onAdd = (product:any, quantity:number, stock: number, shoulder: number, sleeve: number, collar:number, chest:number, hip:number, last:number, blouse:number, dotpoint:number, waistaround:number, BeltFit:number, hipLine:number, pant:number, sizeslect: string, sSkirt: string, sleevee: string, collare: string, pocket: string, pante: string, Cusian: string, color: string, ) => {
      addToCart(product, quantity, stock, shoulder, sleeve, collar, chest, hip, last, blouse, dotpoint, waistaround, BeltFit, hipLine, pant, sizeslect, sSkirt, sleevee, collare, pocket, pante, Cusian, color);
      // toast.success(`${qty} ${product.name} added to the cart.`);
    } 

    let foundProduct;
    const onRemove = (product: any) => {
      removecart(product)
    }
    // console.log(sluger.stringC.map((string, indec) => dcollor !== `color${indec}`))
    // console.log(sluger.stringC.map((string, indec) => `color${indec}`))
    const handleBuyNowMtest = () => {
      if(toSizeSelect !== 'small' && toSizeSelect !== 'medium' && toSizeSelect !== 'large' && toSizeSelect !== 'mine'){ 
        setnosizewarn(true); 
        setdonotbuyforcoat(false);
      }else{
          if (!sluger.stringC.some((string, index) => dcollor === `color${index}`)) {
          setuncolor(true);
          setnosizewarn(false);
          setdonotbuyforcoat(false);
        }else{
          if(iscoat){
            if(hidecoat){
              setdonotbuyforcoat(true);
            }else{
              onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
              setdonotbuyforcoat(false);
              setnosizewarn(false)
              setShowCart(true);
              setuncolor(false);
            }
          }else{
            onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
            setdonotbuyforcoat(false);
            setnosizewarn(false)
            setShowCart(true);
            setuncolor(false);
          }
        }
      }
    }
    const handleBuyNowM1 = () => {
      if(iscoat){
        if(hidecoat){
          setdonotbuyforcoat(true);
          setnosizewarn(false);
          setuncolor(false);
        }else{
          if(toSizeSelect !== 'small' && toSizeSelect !== 'medium' && toSizeSelect !== 'large' && toSizeSelect !== 'mine'){ 
            setnosizewarn(true); 
            setdonotbuyforcoat(false);
          }else{
            if (!sluger.stringC.some((string, index) => dcollor === `color${index}`)) {
              setuncolor(true);
              setnosizewarn(false);
              setdonotbuyforcoat(false);
            }else{
              onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
              setdonotbuyforcoat(false);
              setnosizewarn(false)
              setShowCart(true);
              setuncolor(false);
            }
          }
        }
      }else{
        if(toSizeSelect !== 'small' && toSizeSelect !== 'medium' && toSizeSelect !== 'large' && toSizeSelect !== 'mine'){ 
          setnosizewarn(true); 
          setdonotbuyforcoat(false);
        }else{
          if (!sluger.stringC.some((string, index) => dcollor === `color${index}`)) {
            setuncolor(true);
            setnosizewarn(false);
            setdonotbuyforcoat(false);
          }else{
            onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
            setdonotbuyforcoat(false);
            setnosizewarn(false)
            setShowCart(true);
            setuncolor(false);
          }
        }
      }
    }

    const handleBuyNowM = () => {
      const isValidSize = ['small', 'medium', 'large', 'mine'].includes(toSizeSelect);
      const isValidColor = sluger.stringC.some((string, index) => dcollor === `color${index}`);
    
      if (iscoat && hidecoat) {
        setdonotbuyforcoat(true);
        setnosizewarn(false);
        setuncolor(false);
        setWarnmine(false);
        return;
      }
    
      if (!isValidSize) {
        setnosizewarn(true);
        setdonotbuyforcoat(false);
        return;
      }
    
      if (!isValidColor) {
        setuncolor(true);
        setnosizewarn(false);
        setdonotbuyforcoat(false);
        return;
      }
    
      onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor);
      setdonotbuyforcoat(false); setnosizewarn(false); setShowCart(true); setuncolor(false);
    };

    // const handleBuyNowFe = () => {
    //   if(toSizeSelect !== 'mine' && toSizeSelect !== 'medium'){ 
    //     setnosizewarn(true);
    //     setdonotbuyforcoat(false);
    //   }else{
    //     if(isjew){
    //       if(hidejew){
    //         setdonotbuyforcoat(true);
    //       }else{
    //         setdonotbuyforcoat(false);
    //         onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
    //         setShowCart(true);
    //         setnosizewarn(false);
    //       }
    //     }else{
    //       setdonotbuyforcoat(false);
    //       onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
    //       setShowCart(true);
    //       setnosizewarn(false);
    //     }
    //   }
    // }

    const handleBuyNowFe = () => {
      if(isjew){ 
        if(hidejew){
          setdonotbuyforcoat(true);
          setnosizewarn(false)
        }else{
          if(toSizeSelect !== 'mine' && toSizeSelect !== 'medium'){ 
            setnosizewarn(true);
            setdonotbuyforcoat(false);
          }else {
          setdonotbuyforcoat(false);
          onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
          setShowCart(true);
          setnosizewarn(false);
          }
        }
      }else{{
          if(toSizeSelect !== 'mine' && toSizeSelect !== 'medium'){ 
                setnosizewarn(true);
                setdonotbuyforcoat(false);
              }else{
          setdonotbuyforcoat(false);
          onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
          setShowCart(true);
          setnosizewarn(false);}
        }
      }
    }

        // const handleBuyNowFe = () => {
        //   if(){
        //     setnosizewarn(true);
        //   }else{
        //       setdonotbuyforcoat(false);
        //       onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
        //       setShowCart(true);
        //       setnosizewarn(false);
        //   }
        // }
        const handleBuyNowFse = () => {
          if(toSizeSelect !== 'mine'){ 
            setnosizewarn(true);
            setdonotbuyforcoat(false);
          }else{
            if(isjew){
              if(hidejew){
                setdonotbuyforcoat(true);
              }else{
                setdonotbuyforcoat(false);
                onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
                setShowCart(true);
                setnosizewarn(false);
              }
            }else{
              setdonotbuyforcoat(false);
              onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
              setShowCart(true);
              setnosizewarn(false);
            }
          }
        }

        const handleBuyNowFfirst= () => {
          if(toSizeSelect !== 'medium'){ 
            setnosizewarn(true);
            setdonotbuyforcoat(false);
          }else{
            if(isjew){
              if(hidejew){
                setdonotbuyforcoat(true);
              }else{
                setdonotbuyforcoat(false);
                setnosizewarn(false);
                onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
                setShowCart(true);
              }
            }else{
              setdonotbuyforcoat(false);
              setnosizewarn(false);
              onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
              setShowCart(true);
            }
          }
        }
        const handleBuyNowMG = () => {
          if(toSizeSelect !== "small" && toSizeSelect !== "medium" && toSizeSelect !== "large" && toSizeSelect !== "mine"){ 
            setnosizewarn(true); 
            setdonotbuyforcoat(false);
          }else{
            if (dcollor !== `${sluger?.stringC.map((string, indec) => `color${index}`)}`) {
              // stringC.map((string, index) => <>{dcollor === `color${index}` && string}</>
              // dcollor === 'nocolor'
              setuncolor(true);
              setnosizewarn(false);
              setdonotbuyforcoat(false);
            }else{
              if(iscoat){
                if(hidecoat){
                  setdonotbuyforcoat(true);
                }else{
                  onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
                  setnosizewarn(false)
                  setShowCart(true);
                  setuncolor(false); 
                  setdonotbuyforcoat(false);
                }
              }else{
                onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
                setnosizewarn(false)
                setShowCart(true);
                setuncolor(false); 
                setdonotbuyforcoat(false);
              }
            }
          }
        }
        const handleBuyNowMT = () => {
          if(toSizeSelect !== 'small' && toSizeSelect !== 'medium' && toSizeSelect !== 'large' && toSizeSelect !== 'mine'){ 
            setnosizewarn(true); 
            setdonotbuyforcoat(false);
          }else{
            if (dcollor !== `${sluger?.stringC.map((string, indec) => `color${index}`)}`) {
              setuncolor(true);
              setnosizewarn(false);
              setdonotbuyforcoat(false);
            }else{
              if(iscoat){
                if(hidecoat){
                  setdonotbuyforcoat(true);
                }else{
                  setdonotbuyforcoat(true);
                  onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
                  setnosizewarn(false)
                  setShowCart(true);
                  setuncolor(false);  
                }
              }else{
                setdonotbuyforcoat(true);
                onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
                setnosizewarn(false)
                setShowCart(true);
                setuncolor(false);
              }
            }
          }
        }

        const handleBuyNowCus = () => {
          if(Cusian !== 'Cusian1' && Cusian !== 'Cusian2' && Cusian !== 'Cusian3'){ 
            setcusianwarn(true);
            setcusiansizewarn(false);
          }else{
              if(qty < 4){
                setcusainerrorofthequatntity(true);
              }else{
              setlimmitewidth(false);
              setlimmitehegiht(false); 
              setcusainerrorofthequatntity(false);
              onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
              setShowCart(true);
              setcusiansizewarn(false);
              setcusianwarn(false);
            }
          }
        }
        const handleBuyNowS = () => {
          if(toSizeSelect !== 'mine'){ 
            setnosizewarn(true); 
            setdonotbuyforcoat(false);
          }else{
                onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
                setdonotbuyforcoat(false);
                setnosizewarn(false)
                setShowCart(true);
                setuncolor(false);
              }
            }

        const handleBuyNowHe = () => {
          onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
          setShowCart(true);
        }

        const handleadder = () => {
            onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
        }

        // const handleadder = () => {
        //   // if(toSizeSelect !== 'small' && toSizeSelect !== 'madium' && toSizeSelect !== 'large' && toSizeSelect !== 'mine')
        //   //   { setnosizewarn(true); }else{ 
        //   //     router.back(); sethidecoat(false); setnosizewarn(false);
        //   //   }
        //   onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, toSizeSelect, sSkirt, sleeve, collar, pocket, pant, Cusian, dcollor );
        // }
  
  if (!sluger || !allproducts) {
    return <>
      <Back TiArrowBack={TiArrowBack} useRouter={useRouter} />
      <Guide RxVideo={RxVideo} />
      <LoadingPage />
    </>;
  }
  return (
  <>
  <nav className='flex mt-[10px] ml-[15px] mr-[15px] justify-between'>
    <Back TiArrowBack={TiArrowBack} useRouter={useRouter} />
    <Guide RxVideo={RxVideo} />
  </nav>
    {/* <Back TiArrowBack={TiArrowBack} useRouter={useRouter} /> */}
    {/* <Guide RxVideo={RxVideo} /> */}
    {sluger.productcategory==="Male" &&
<Male 
  maleSize={maleSize} 
setmaleSize={setmaleSize}
  toSizeSelect={toSizeSelect}
  settoSizeSelect={settoSizeSelect}
  Warnmine={Warnmine}
  setWarnmine={setWarnmine}
  uncolor={uncolor}
  setuncolor={setuncolor}
  donotbuyforcoat={donotbuyforcoat}
  setdonotbuyforcoat={setdonotbuyforcoat}
  hidecoat={hidecoat}
  sethidecoat={sethidecoat}
  iscoat={iscoat}
  setiscoat={setiscoat}
  showcoat={showcoat}
  setshowcoat={setshowcoat}
  getstok={getstok}
  getshoulder={getshoulder}
  getsleeve={getsleeve}
  getcollar={getcollar}
  getchest={getchest}
  getlast={getlast}
  getpant={getpant}
  sSkirt={sSkirt}
  sleeve={sleeve} 
  collar={collar} 
  pocket={pocket} 
  pant={pant} 
  dcollor={dcollor}
  showColor={showColor}
  setShowColor={setShowColor}
  products={products}
  Product={Product}
  handleBuyNowM={handleBuyNowM}
  image={sluger.image} 
  name={sluger.name} 
  _id={sluger._id} 
  key={sluger._id} 
  index={index} 
  setindex={setIndex}  
  CType={CType} 
  setCType={setCType}
  Sdetails={sluger.Sdetails}
  Ldetails={sluger.Ldetails}
  price={sluger.price}
  price2={sluger.price2}
  stringC={sluger.stringC}
  productcategory={sluger.productcategory}
  moredetail={moredetail}
  setmoredetail={setmoredetail}
  nosizewarn={nosizewarn} 
  setnosizewarn={setnosizewarn}
  sizemPage={sizemPage} 
  setsizemPage={setsizemPage}
/>}
{sluger.productcategory === "Female" && 
<Female 
sizemPage={sizemPage} 
setsizemPage={setsizemPage}
showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
isjew={isjew}
femaleSize={femaleSize} 
setfemaleSize={setfemaleSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
Product={Product}
handleBuyNowFe={handleBuyNowFe}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
/>}
{sluger.productcategory === "Femalesecond" && 
<Femalesecond
sizemPage={sizemPage}
setsizemPage={setsizemPage}
showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
isjew={isjew}
femaleSize={femaleSize} 
setfemaleSize={setfemaleSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
Product={Product}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
getdotpoint={getdotpoint} 
getblouse={getblouse} 
gethip={gethip} 
fesecSize={fesecSize} 
setfesecSize={setfesecSize}
handleBuyNowFe={handleBuyNowFe}
/>
}


{sluger.productcategory === "Femalefirst" && 
<Femalefirst showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
isjew={isjew}
femaleSize={femaleSize} 
setfemaleSize={setfemaleSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
Product={Product}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
getdotpoint={getdotpoint} 
getblouse={getblouse} 
gethip={gethip} 
fesecSize={fesecSize} 
setfesecSize={setfesecSize}
handleBuyNowFe={handleBuyNowFe}/>
}

{/* {sluger.productcategory === "Femalefourth" &&
<Femalefourth 
showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
isjew={isjew}
femaleSize={femaleSize} 
setfemaleSize={setfemaleSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
Product={Product}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
getdotpoint={getdotpoint} 
getblouse={getblouse} 
gethip={gethip} 
fesecSize={fesecSize} 
setfesecSize={setfesecSize}
handleBuyNowHe={handleBuyNowHe}
/>
} */}

{sluger.productcategory === "Femalefourth" &&
<Femalefourth
handleBuyNowHe={handleBuyNowHe}
showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
isjew={isjew}
femaleSize={femaleSize} 
setfemaleSize={setfemaleSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
Product={Product}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
getdotpoint={getdotpoint} 
getblouse={getblouse} 
gethip={gethip} 
fesecSize={fesecSize} 
setfesecSize={setfesecSize}
/>
}


{sluger.productcategory === 'MaleG' && 
<MaleG
sizemPage={sizemPage} 
setsizemPage={setsizemPage}
showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
isjew={isjew}
femaleSize={femaleSize} 
setfemaleSize={setfemaleSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
Product={Product}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
getdotpoint={getdotpoint} 
getblouse={getblouse} 
gethip={gethip} 
maleSizeG={maleSizeG} 
setmaleSizeG={setmaleSizeG}
handleBuyNowM={handleBuyNowM}
/>
}

{sluger.productcategory === 'MaleT' && 
<MaleT
sizemPage={sizemPage}
setsizemPage={setsizemPage}
showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
isjew={isjew}
femaleSize={femaleSize} 
setfemaleSize={setfemaleSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
Product={Product}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
getdotpoint={getdotpoint} 
getblouse={getblouse} 
gethip={gethip} 
maleSizeT={maleSizeT} 
setmaleSizeT={setmaleSizeT}
handleBuyNowM={handleBuyNowM}
/>
}

{sluger.productcategory==='Coat' && 
<Coat 
sizemPage={sizemPage}
setsizemPage={setsizemPage}
useRouter={useRouter}
showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
isjew={isjew}
femaleSize={femaleSize} 
setfemaleSize={setfemaleSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
setdcollor={setdcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
Product={Product}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
getdotpoint={getdotpoint} 
getblouse={getblouse} 
gethip={gethip} 
coatSize={coatSize} 
setcoatSize={setcoatSize}
handleadder={handleadder}
/>

}

{sluger.productcategory === 'Suit' && 
<Suit
sizemPage={sizemPage} 
setsizemPage={setsizemPage}
getwaistaround={getwaistaround}
gethipLine={gethipLine}
getBeltFit={getBeltFit}
showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
isjew={isjew}
suitSize={suitSize} 
setsuitSize={setsuitSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
Product={Product}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
getdotpoint={getdotpoint} 
getblouse={getblouse} 
gethip={gethip} 
maleSizeT={maleSizeT} 
setmaleSizeT={setmaleSizeT}
handleBuyNowS={handleBuyNowS}
/>
}

{sluger.productcategory === 'Jewellery' &&
<Jewellery 
useRouter={useRouter}
showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
sethidejew={sethidejew}
isjew={isjew}
femaleSize={femaleSize} 
setfemaleSize={setfemaleSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
Product={Product}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
getdotpoint={getdotpoint} 
getblouse={getblouse} 
gethip={gethip} 
coatSize={coatSize} 
setcoatSize={setcoatSize}
handleadder={handleadder}
/>
  }

  {sluger.productcategory === 'Headboard' && 
  <Headboard 
  showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
isjew={isjew}
femaleSize={femaleSize} 
setfemaleSize={setfemaleSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
Product={Product}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
getdotpoint={getdotpoint} 
getblouse={getblouse} 
gethip={gethip} 
maleSizeT={maleSizeT} 
setmaleSizeT={setmaleSizeT}
handleBuyNowHe={handleBuyNowHe}/>
  }

{sluger.productcategory === 'Cushion' && 
<Cushion
cusainerrorofthequatntity={cusainerrorofthequatntity}
cusianwarn={cusianwarn}
FcCheckmark={FcCheckmark}
Cusian={Cusian}
setCusian={setCusian}
showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
isjew={isjew}
femaleSize={femaleSize} 
setfemaleSize={setfemaleSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
ProductCu={ProductCu}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
getdotpoint={getdotpoint} 
getblouse={getblouse} 
gethip={gethip} 
maleSizeT={maleSizeT} 
setmaleSizeT={setmaleSizeT}
handleBuyNowCus={handleBuyNowCus}
 />
}

{sluger.productcategory === 'Cotton' && 
<Cotton
showjew={showjew}
setshowjew={setshowjew}
setisjew={setisjew}
hidejew={hidejew}
isjew={isjew}
femaleSize={femaleSize} 
setfemaleSize={setfemaleSize}
toSizeSelect={toSizeSelect}
settoSizeSelect={settoSizeSelect}
Warnmine={Warnmine}
setWarnmine={setWarnmine}
uncolor={uncolor}
setuncolor={setuncolor}
donotbuyforcoat={donotbuyforcoat}
setdonotbuyforcoat={setdonotbuyforcoat}
hidecoat={hidecoat}
sethidecoat={sethidecoat}
iscoat={iscoat}
setiscoat={setiscoat}
showcoat={showcoat}
setshowcoat={setshowcoat}
getstok={getstok}
getshoulder={getshoulder}
getsleeve={getsleeve}
getcollar={getcollar}
getchest={getchest}
getlast={getlast}
getpant={getpant}
sSkirt={sSkirt}
sleeve={sleeve} 
collar={collar} 
pocket={pocket} 
pant={pant} 
dcollor={dcollor}
showColor={showColor}
setShowColor={setShowColor}
products={products}
CoProduct={CoProduct}
image={sluger.image} 
name={sluger.name} 
_id={sluger._id} 
key={sluger._id} 
index={index} 
setindex={setIndex}  
CType={CType} 
setCType={setCType}
Sdetails={sluger.Sdetails}
Ldetails={sluger.Ldetails}
price={sluger.price}
price2={sluger.price2}
stringC={sluger.stringC}
productcategory={sluger.productcategory}
moredetail={moredetail}
setmoredetail={setmoredetail}
nosizewarn={nosizewarn} 
setnosizewarn={setnosizewarn}
getdotpoint={getdotpoint} 
getblouse={getblouse} 
gethip={gethip} 
maleSizeT={maleSizeT} 
setmaleSizeT={setmaleSizeT}
handleBuyNowMT={handleBuyNowMT}
/>
}
    <div onClick={() => {onAdd(sluger, qty, getstok, getshoulder, getsleeve, getcollar, getchest, gethip, getlast, getblouse, getdotpoint, getwaistaround, getBeltFit, gethipLine, getpant, dcollor, sSkirt, sleeve, collar, pocket, pant, Cusian, toSizeSelect ); setShowCart(true)}}>show</div>
    {showcoat &&
  <Coa setshowcoat={setshowcoat} showcoat={showcoat} AiOutlineLeft={AiOutlineLeft} products={products} Product={Product} />
  }
    {showjew && <Jew setshowjew={setshowjew} showjew={showjew} AiOutlineLeft={AiOutlineLeft} products={products} Product={Product} />
  }
    {showColor &&
    <>
      <div className="Size-wrapper">
      <div className="size-Cw">
      <div className="Size-container">
      <button
        type="button"
        className="cart-heading color-cancel"
        onClick={() => {setShowColor(false)}}>
          <AiOutlineLeft />
          <p className="heading cancel-color-real">Cancel</p>
        </button> 
    
        <div className='color-scroller'>
        {sluger.imageC.map((image, index) => 
        <>
          {image && <img src={image} width={100} height={100} onClick={()=> {setShowColor(false); setdcollor(`color${index}`); setuncolor(false)}} />}
        </>
        )}
        </div>
        </div>
        </div>
      </div>
    </>
    }


{showCart && <Cart onremove={onRemove} AiOutlinePlus={AiOutlinePlus} uncolor={uncolor} showCart={showCart} setShowCart={setShowCart} />}
{maleSize && <Msize AiOutlineLeft={AiOutlineLeft} FcCheckmark={FcCheckmark} MdOutlineKeyboardBackspace={MdOutlineKeyboardBackspace} nosizewarn={nosizewarn} setnosizewarn={setnosizewarn} Warnmine={Warnmine} setWarnmine={setWarnmine} getpant={getpant} setgetpant={setgetpant} pant={pant} setpant={setpant} pocket={pocket} setpocket={setpocket} collar={collar} setcollar={setcollar} sleeve={sleeve} setsleeve={setsleeve} getshoulder={getshoulder} setgetshoulder={setgetshoulder} getsleeve={getsleeve} setgetsleeve={setgetsleeve} getcollar={getcollar} setgetcollar={setgetcollar} getchest={getchest} setgetchest={setgetchest} getlast={getlast} setgetlast={setgetlast} warn={warn} setwarn={setwarn} warney={warney} setwarney={setwarney} getstok={getstok} setgetstok={setgetstok} sSkirt={sSkirt} setsSkirt={setsSkirt} ReactPlayer={ReactPlayer} sizemPage={sizemPage} setsizemPage={setsizemPage} maleSize={maleSize} setmaleSize={setmaleSize} toSizeSelect={toSizeSelect} settoSizeSelect={settoSizeSelect} />}
{femaleSize && <Fsize AiOutlineLeft={AiOutlineLeft} FcCheckmark={FcCheckmark} MdOutlineKeyboardBackspace={MdOutlineKeyboardBackspace} nosizewarn={nosizewarn} setnosizewarn={setnosizewarn} Warnmine={Warnmine} setWarnmine={setWarnmine} getpant={getpant} setgetpant={setgetpant} pant={pant} setpant={setpant} pocket={pocket} setpocket={setpocket} collar={collar} setcollar={setcollar} sleeve={sleeve} setsleeve={setsleeve} getshoulder={getshoulder} setgetshoulder={setgetshoulder} getsleeve={getsleeve} setgetsleeve={setgetsleeve} getcollar={getcollar} setgetcollar={setgetcollar} getchest={getchest} setgetchest={setgetchest} getlast={getlast} setgetlast={setgetlast} warn={warn} setwarn={setwarn} warney={warney} setwarney={setwarney} getstok={getstok} setgetstok={setgetstok} sSkirt={sSkirt} setsSkirt={setsSkirt} ReactPlayer={ReactPlayer} sizemPage={sizemPage} setsizemPage={setsizemPage} femaleSize={femaleSize} setfemaleSize={setfemaleSize} toSizeSelect={toSizeSelect} settoSizeSelect={settoSizeSelect} />}
{fesecSize && <FESsize gethip={gethip} setgethip={setgethip} gethipLine={gethipLine} setgethipLine={setgethipLine} getBeltFit={getBeltFit} setgetBeltFit={setgetBeltFit} getwaistaround={getwaistaround} setgetwaistaround={setgetwaistaround} getblouse={getblouse} setgetblouse={setgetblouse} getdotpoint={getdotpoint} setgetdotpoint={setgetdotpoint} fesecSize={fesecSize} setfesecSize={setfesecSize} AiOutlineLeft={AiOutlineLeft} FcCheckmark={FcCheckmark} MdOutlineKeyboardBackspace={MdOutlineKeyboardBackspace} nosizewarn={nosizewarn} setnosizewarn={setnosizewarn} Warnmine={Warnmine} setWarnmine={setWarnmine} getpant={getpant} setgetpant={setgetpant} pant={pant} setpant={setpant} pocket={pocket} setpocket={setpocket} collar={collar} setcollar={setcollar} sleeve={sleeve} setsleeve={setsleeve} getshoulder={getshoulder} setgetshoulder={setgetshoulder} getsleeve={getsleeve} setgetsleeve={setgetsleeve} getcollar={getcollar} setgetcollar={setgetcollar} getchest={getchest} setgetchest={setgetchest} getlast={getlast} setgetlast={setgetlast} warn={warn} setwarn={setwarn} warney={warney} setwarney={setwarney} getstok={getstok} setgetstok={setgetstok} sSkirt={sSkirt} setsSkirt={setsSkirt} ReactPlayer={ReactPlayer} sizemPage={sizemPage} setsizemPage={setsizemPage} toSizeSelect={toSizeSelect} settoSizeSelect={settoSizeSelect} />}
{maleSizeG && <MGsize gethip={gethip} setgethip={setgethip} gethipLine={gethipLine} setgethipLine={setgethipLine} getBeltFit={getBeltFit} setgetBeltFit={setgetBeltFit} getwaistaround={getwaistaround} setgetwaistaround={setgetwaistaround} maleSizeG={maleSizeG} setmaleSizeG={setmaleSizeG} AiOutlineLeft={AiOutlineLeft} FcCheckmark={FcCheckmark} MdOutlineKeyboardBackspace={MdOutlineKeyboardBackspace} nosizewarn={nosizewarn} setnosizewarn={setnosizewarn} Warnmine={Warnmine} setWarnmine={setWarnmine} getpant={getpant} setgetpant={setgetpant} pant={pant} setpant={setpant} pocket={pocket} setpocket={setpocket} collar={collar} setcollar={setcollar} sleeve={sleeve} setsleeve={setsleeve} getshoulder={getshoulder} setgetshoulder={setgetshoulder} getsleeve={getsleeve} setgetsleeve={setgetsleeve} getcollar={getcollar} setgetcollar={setgetcollar} getchest={getchest} setgetchest={setgetchest} getlast={getlast} setgetlast={setgetlast} warn={warn} setwarn={setwarn} warney={warney} setwarney={setwarney} getstok={getstok} setgetstok={setgetstok} sSkirt={sSkirt} setsSkirt={setsSkirt} ReactPlayer={ReactPlayer} sizemPage={sizemPage} setsizemPage={setsizemPage} toSizeSelect={toSizeSelect} settoSizeSelect={settoSizeSelect} />}
{coatSize && <Csize gethip={gethip} setgethip={setgethip} gethipLine={gethipLine} setgethipLine={setgethipLine} getBeltFit={getBeltFit} setgetBeltFit={setgetBeltFit} getwaistaround={getwaistaround} setgetwaistaround={setgetwaistaround}  coatSize={coatSize} setcoatSize={setcoatSize} AiOutlineLeft={AiOutlineLeft} FcCheckmark={FcCheckmark} MdOutlineKeyboardBackspace={MdOutlineKeyboardBackspace} nosizewarn={nosizewarn} setnosizewarn={setnosizewarn} Warnmine={Warnmine} setWarnmine={setWarnmine} getpant={getpant} setgetpant={setgetpant} pant={pant} setpant={setpant} pocket={pocket} setpocket={setpocket} collar={collar} setcollar={setcollar} sleeve={sleeve} setsleeve={setsleeve} getshoulder={getshoulder} setgetshoulder={setgetshoulder} getsleeve={getsleeve} setgetsleeve={setgetsleeve} getcollar={getcollar} setgetcollar={setgetcollar} getchest={getchest} setgetchest={setgetchest} getlast={getlast} setgetlast={setgetlast} warn={warn} setwarn={setwarn} warney={warney} setwarney={setwarney} getstok={getstok} setgetstok={setgetstok} sSkirt={sSkirt} setsSkirt={setsSkirt} ReactPlayer={ReactPlayer} sizemPage={sizemPage} setsizemPage={setsizemPage} toSizeSelect={toSizeSelect} settoSizeSelect={settoSizeSelect} />}
{maleSizeT && <MTsize gethip={gethip} setgethip={setgethip} gethipLine={gethipLine} setgethipLine={setgethipLine} getBeltFit={getBeltFit} setgetBeltFit={setgetBeltFit} getwaistaround={getwaistaround} setgetwaistaround={setgetwaistaround} maleSizeT={maleSizeT} setmaleSizeT={setmaleSizeT} AiOutlineLeft={AiOutlineLeft} FcCheckmark={FcCheckmark} MdOutlineKeyboardBackspace={MdOutlineKeyboardBackspace} nosizewarn={nosizewarn} setnosizewarn={setnosizewarn} Warnmine={Warnmine} setWarnmine={setWarnmine} getpant={getpant} setgetpant={setgetpant} pant={pant} setpant={setpant} pocket={pocket} setpocket={setpocket} collar={collar} setcollar={setcollar} sleeve={sleeve} setsleeve={setsleeve} getshoulder={getshoulder} setgetshoulder={setgetshoulder} getsleeve={getsleeve} setgetsleeve={setgetsleeve} getcollar={getcollar} setgetcollar={setgetcollar} getchest={getchest} setgetchest={setgetchest} getlast={getlast} setgetlast={setgetlast} warn={warn} setwarn={setwarn} warney={warney} setwarney={setwarney} getstok={getstok} setgetstok={setgetstok} sSkirt={sSkirt} setsSkirt={setsSkirt} ReactPlayer={ReactPlayer} sizemPage={sizemPage} setsizemPage={setsizemPage} toSizeSelect={toSizeSelect} settoSizeSelect={settoSizeSelect} />}
{suitSize && <Ssize gethip={gethip} setgethip={setgethip} gethipLine={gethipLine} setgethipLine={setgethipLine} getBeltFit={getBeltFit} setgetBeltFit={setgetBeltFit} getwaistaround={getwaistaround} setgetwaistaround={setgetwaistaround} suitSize={suitSize} setsuitSize={setsuitSize} AiOutlineLeft={AiOutlineLeft} FcCheckmark={FcCheckmark} MdOutlineKeyboardBackspace={MdOutlineKeyboardBackspace} nosizewarn={nosizewarn} setnosizewarn={setnosizewarn} Warnmine={Warnmine} setWarnmine={setWarnmine} getpant={getpant} setgetpant={setgetpant} pant={pant} setpant={setpant} pocket={pocket} setpocket={setpocket} collar={collar} setcollar={setcollar} sleeve={sleeve} setsleeve={setsleeve} getshoulder={getshoulder} setgetshoulder={setgetshoulder} getsleeve={getsleeve} setgetsleeve={setgetsleeve} getcollar={getcollar} setgetcollar={setgetcollar} getchest={getchest} setgetchest={setgetchest} getlast={getlast} setgetlast={setgetlast} warn={warn} setwarn={setwarn} warney={warney} setwarney={setwarney} getstok={getstok} setgetstok={setgetstok} sSkirt={sSkirt} setsSkirt={setsSkirt} ReactPlayer={ReactPlayer} sizemPage={sizemPage} setsizemPage={setsizemPage} toSizeSelect={toSizeSelect} settoSizeSelect={settoSizeSelect} />}
    
{/* {moredetail &&
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
          <pre className="product-detail-desc">{sluger.Ldetails}</pre>
          <div className='color-scroller'>
          </div>
        </div>
      </div>
  </div>
  } */}

  
  </>
)
}

export default Productpage
