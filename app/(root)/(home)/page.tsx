"use client"
import React, { useState, useEffect } from 'react';
import { Product, ProductCu, CoProduct, Categories, LoadingPage  } from '@/components/index';
import Link from 'next/link';
import {CircularProgress} from "@nextui-org/progress";
import { useGenerationStore } from '@/state/idea-generation'
import { getProducts } from '@/sanity/actions';

export const revalidate = 900;

interface Product {
    _id: string;
    name: string;
    slug: {
        current: string;
    };
}

const HomePage: React.FC = () => {
    
    const { CType, setCType, tabType, settabType } = useGenerationStore()
    const categorys: { name: string, type: string }[] = [
    { name: "Male", type: "Clothes" },
    { name: "Female", type: "Clothes" },
    { name: "Femalefirst", type: "Clothes" },
    { name: "Cotton", type: "Others" },
    { name: "Suit", type: "Clothes" },
    { name: "MaleT", type: "Clothes" },
    { name: "MaleG", type: "Clothes" },
    { name: "Headboard", type: "Others" },
    { name: "Cushion", type: "Others" },
    { name: "Femalesecond", type: "Clothes" },
    { name: "Femalefourth", type: "Clothes" }
    ];
    const [products, setProducts] = useState<Product[] | null>(null);
    useEffect(() => {
    const fetchData = async () => {
      const allProductsData = await getProducts();
      setProducts(allProductsData);
    };
    
    fetchData();
  }, []);

    if (!products) {
    return <div>
        <Categories />
        <div>Loading...</div>
        <CircularProgress aria-label="Loading..." />
    </div>;
  }

    return (
        <>
    <Categories />
    <div className="products-container">
        {CType === "Female" && products.map((item: any) => (
        item.productcategory ==="Female" ?
          <Product key={item._id} image={item.image} name={item.name} Sdetails={item.Sdetails} price={item.price} slug={item.slug}
          />
        : ""
        ))}
        {CType === "Female" && products.map((item: any) => (
        item.productcategory ==="Femalefirst" ?
          <Product key={item._id} image={item.image} name={item.name} Sdetails={item.Sdetails} price={item.price} slug={item.slug}
          />
        : ""
        ))}
        {CType === "Female" && products.map((item: any) => (
        item.productcategory ==="Femalesecond" ?
          <Product key={item._id} image={item.image} name={item.name} Sdetails={item.Sdetails} price={item.price} slug={item.slug}
          />
        : ""
        ))}
        {CType === "Female" && products.map((item: any) => (
        item.productcategory ==="Femalefourth" ?
          <Product key={item._id} image={item.image} name={item.name} Sdetails={item.Sdetails} price={item.price} slug={item.slug}
          />
        : ""
        ))}
        {CType === "Male" && products.map((item: any) => (
        item.productcategory ==="Male" ?
          <Product key={item._id} image={item.image} name={item.name} Sdetails={item.Sdetails} price={item.price} slug={item.slug}
          />
        : ""
        ))}
        {CType === "Male" && products.map((item: any) => (
        item.productcategory ==="Suit" ?
          <Product key={item._id} image={item.image} name={item.name} Sdetails={item.Sdetails} price={item.price} slug={item.slug}
          />
        : ""
        ))}
        {CType === "Male" && products.map((item: any) => (
        item.productcategory ==="MaleT" ?
          <Product key={item._id} image={item.image} name={item.name} Sdetails={item.Sdetails} price={item.price} slug={item.slug}
          />
        : ""
        ))}
        {CType === "Male" && products.map((item: any) => (
        item.productcategory ==="MaleG" ?
          <Product key={item._id} image={item.image} name={item.name} Sdetails={item.Sdetails} price={item.price} slug={item.slug}
          />
        : ""
        ))}
        {CType === "Headboard" && products.map((item: any) => (
        item.productcategory ==="Headboard" ?
          <Product key={item._id} image={item.image} name={item.name} Sdetails={item.Sdetails} price={item.price} slug={item.slug}
          />
        : ""
        ))}
        {CType === "Headboard" && products.map((item: any) => (
        item.productcategory ==="Cotton" ?
          <CoProduct key={item._id} image={item.image} name={item.name} Sdetails={item.Sdetails} price={item.price} slug={item.slug}
          />
        : ""
        ))}
        {CType === "Headboard" && products.map((item: any) => (
        item.productcategory ==="Cushion" ?
          <ProductCu key={item._id} image={item.image} name={item.name} Sdetails={item.Sdetails} price={item.price} slug={item.slug}
          />
        : ""
        ))}
      </div>
        </>
    );
};

export default HomePage;
