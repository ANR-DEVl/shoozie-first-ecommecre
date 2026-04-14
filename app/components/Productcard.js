'use client'


import { useEffect, useState } from "react";



import styles from "../post/mainproduct.module.css";
import styles2 from '../products/pro.module.css'
import StarIcon from '@mui/icons-material/Star';

import Link from "next/link";
import Image from "next/image";


import { useCart } from "../context/cartContext";
import OrderToast from "./OrderToast";

export default function Productcard({title, price, shortdisc, rate, img,proId,selectedSize,sizeArray}) {


    const { cart, addToCart } = useCart();

        const orderedProduct = {
        productId: proId,
        quantity: 1,
        orderedSize: selectedSize,
        cartId:`${proId}${selectedSize}`,
        name:title,
        price,
        sizeArray,
        img

    }



    //     const cartButton = ()=>{

    const [orderToastStatus,setOrderToastStatus] = useState(false)

    function toastHandler(){
        setOrderToastStatus(true)
        setTimeout(() => {
            setOrderToastStatus(false)
    },2000);
}





    const cartButton = (e)=>{
        e.stopPropagation();
        e.preventDefault()



        addToCart(orderedProduct)
            toastHandler('cart');
        
    }


//         useEffect(() => {
//             localStorage.setItem('cart',JSON.stringify(cart))
        // console.log(cart) 
        
// }, [cart])

// console.log(selectedSize)



    return (
        <Link href={`/post/${proId}`} className={`${styles.productcard} ${styles2.productcard}`}>
            {<OrderToast mode='cart' status={orderToastStatus} /> }
            <div className={styles.fixedbtn}>
                <button className={styles['added']} onClick={cartButton} >Add to Cart</button>
            </div>
            <img  src={`/photos/${img[0]}.jpg`} alt="ppp" />
            <h4>{title}</h4>
            <hr />
            <p className={styles.disc}>{shortdisc}</p>
            <div className={styles.pr}>
                <p className={styles.price}>{`${price}$`}</p>
                <div className={styles.rating}>
                    {rate}
                    <StarIcon style={{color:'yellow'}}/>
                </div>
            </div>
        </Link>
    )
}