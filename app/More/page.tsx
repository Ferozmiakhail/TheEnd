import React from "react";
import Link from 'next/link';
import { AiOutlineLeft } from 'react-icons/ai';


const More = () => {
    return (
    <>
    <div className="Size-wrapper">
        <div className="size-Cw">
            <div className="Size-container">
                <button
                    type="button"
                    className="cart-heading color-cancel">
                    <AiOutlineLeft />
                    <p className="heading cancel-color-real back-detail-prob">Back</p>
                </button>

                <h4 className="product-detail-desc product-detail-desc-top">Details: </h4>
                <p className="product-detail-desc">Ldetails</p>
                <div className='color-scroller'>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default More
