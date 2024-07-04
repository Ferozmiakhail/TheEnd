import React from 'react';
import Image from "next/image"; 

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
    showcoat: boolean, 
    setshowcoat: (showjew: boolean) => void,
    products: Array<Product>,
    AiOutlineLeft: any,
    Product: any,
}

const Coa = ({ Product, AiOutlineLeft, products, showcoat, setshowcoat }: Props) => {

  return (
    <div className="Size-wrapper">
    <div className="size-Cw">
      <div className="Size-container">
      <button
        type="button"
        className="cart-heading color-cancel"
        onClick={() => setshowcoat(false)}>
          <AiOutlineLeft />
          <p className="heading cancel-color-real">Cancel</p>
        </button>

        <div className="maylike-products-container track">
          {products.map((item) => (
              item.productcategory === "Coat"? <Product key={item._id}
              image={item.image}
              name={item.name}
              Sdetails={item.Sdetails}
              price={item.price}
              slug={item.slug} /> : ""
            ))}
        </div>
          <div className='color-scroller'>
          </div>
        </div>
      </div>
  </div>
)
}

export default Coa
 
