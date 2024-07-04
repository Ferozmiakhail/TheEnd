import React from 'react'
import { useGenerationStore } from '@/state/idea-generation'

const Categories = () => {
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
  const toggleMe=(value: string)=>{
      settabType(value)
    }
    const clickMe=(value: string)=>{
      setCType(value)
    }
  return (
    <>
    <div className="products-heading">
      <h2>Categories</h2>
    </div>
    <div className='product-categories-container-cd'>
      <div className='product-category-top-text-cd'>
        <p className={tabType === "Clothes" ? 'product-name-Category-top-click product-name-Category' : "product-name-Category-top product-name-Category"} onClick={()=>{ clickMe("Male"); toggleMe("Clothes") }}>Clothes</p>
        <p className={tabType === "Others" ? 'product-name-Category-top-click product-name-Category' : "product-name-Category-top product-name-Category"} onClick={()=>{ clickMe("Headboard"); toggleMe("Others") }}>Others</p>
      </div>
      <div className='products-Category-container'>
        {tabType === "Clothes" && categorys?.map((category) => category.type === "Clothes" ? category.name!=="Suit" && category.name!=="Femalesecond" && category.name!=="Femalefourth" && category.name!=="Femalefirst" && category.name!=="Coat" && category.name!=="MaleT" && category.name!=="MaleG" &&
          <div><div><p className="product-name product-name-Category"></p></div><div className="product-Category" onClick={()=>clickMe(category.name)}><p className="product-name product-name-Category category-product-prob" onClick={()=>clickMe(category.name)}>
        {category.name}</p></div></div> : "")}
        {tabType === "Others" && categorys?.map((category) => category.type === "Others" ? category.name!=="Coat" && category.name!=="MaleT" && category.name!=="Cotton" && category.name!=="Cushion" && category.name!=="Headboard" && category.name!=="MaleG" && category.name!=="Jewellery" &&
          <div><div><p className="product-name product-name-Category"></p></div><div className="product-Category" onClick={()=>clickMe(category.name)}><p className="product-name product-name-Category category-product-prob" onClick={()=>clickMe(category.name)}>
        {category.name==="Cotton" ? "Window-Curtain" : category.name==="Cushion" ? "Mattress-Cover" :category.name==="Headboard"? "Bedding" :category.name}</p></div></div> : "")}
      </div>
    </div>
          
    <div className="products-heading">
      <h2>{CType === "Male" ? "Male" : CType === "Female" ? "Female" : CType === "Cotton" ? "Window-Curtain" : CType === "Cushion" ? "Mattress-Cover" : CType === "Jewellery" ? "Jewellery" : CType === "Headboard" && " "} Products</h2>
      <p>Please Choose Your Product</p>
    </div>
    </>
  )
}

export default Categories
