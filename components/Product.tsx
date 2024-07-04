import React from 'react';
import Link from 'next/link';
import Image from "next/image";

interface Props {
  name: string;
  image: Array<string>;
  Sdetails: string;
  price: number;
  slug: string;
}

const Product = ({ name, image, Sdetails, price, slug }: Props) => {
  return (
    // <>
    //   <div>
    //     <Link prefetch href={`/product/${slug}`}>
    //     <div>
    //       <div className="product-card cursor-pointer scale-100 transition-transform duration-500 ease-in-out text-[#324d67] mt-8 w-64 hover:scale-110">
    //         <Image 
    //         src={image[0]}
    //         width={250}
    //         height={300}
    //         alt={name}
    //         className="rounded-lg bg-gray-200 transform scale-100 transition-transform duration-500 ease" />
    //         <p className="product-name w-64 font-semibold">{name}</p>
    //         <p className="product-name w-64 font-semibold">{Sdetails}</p>
    //         <p className="font-extrabold mt-6 text-black">${price}</p>
    //       </div>
    //     </div>
    //     </Link>
    //   </div>
    // </>
     <div>
      <Link prefetch href={`/product/${slug}`}>
        <div className="product-card">
          <Image
            src={image[0]}
            width={250}
            height={300}
            alt={name}
            className="product-image"
          />
          <p className="product-name product-name-detail-text">{name}</p>
          <p className="product-name product-name-detail-text product-name product-name-detail-text-bold">{Sdetails}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product;
