'use client';


import { useState ,useEffect} from "react";

import styles from "../post/mainproduct.module.css";

import BRating from "./rating";

import Button from '@mui/material/Button';


import { useCart } from "../context/cartContext";


export default function Propreties(props) {

//cart and ordered product setup




    const selectedSize = props.selectedSize;


    



    const { cart, addToCart } = useCart();



        const orderedProduct = {
        productId: props.id,
        quantity: 1,
        orderedSize: selectedSize,
        cartId:`${props.id}${selectedSize}`,
        name:props.title,
        price:props.price,
        sizeArray:props.sizeArray,
        img:props.img
    }



    const cartButton = ()=>{



        addToCart(orderedProduct)
        props.toastHandler('cart');
        
    }


//     useEffect(() => {
//         localStorage.setItem('cart',JSON.stringify(cart))
//     // console.log(cart) 
//     // console.log(selectedSize)
// }, [cart])





// buy now setup

const buyHandler = props.buyHandler; 












    return (
        <div className={styles.propreties}>
            <div className={styles.brand}>
                <h2>Shoozie</h2>
            </div>
            <h3>{props.title}</h3>
            <div className={styles.ratebar}>
                <BRating/><span style={{color:'#583101'}}>{props.rate}</span>
            </div>
            

            <div className={styles.disc}>
                <p>
                    {props.disc}</p>
                <span>#MensShoes #StreetStyle #ComfortWear #AirForce #Trending2025 #Sportswear #CasualLook</span>
            
            </div>
            <div className={styles.price}>{`${props.price} $`}</div>
            <div className={styles.opts}>





                <Button onClick={cartButton} className={styles.btnClick}
                    sx={{
                        minWidth:'100px',
                        padding: '10px',
                        backgroundColor: '#19d367',
                        color: '#fff',
                        borderRadius: '4px',
                        '&:hover': {
                        backgroundColor: '#0fb658'
                        }
                        }}
                        >Add to Cart
                    </Button>





                <Button 
                    onClick={buyHandler} className={styles.btnClick}
                    sx={{
                        minWidth:'100px',
                        padding: '10px',
                        backgroundColor: '#19d367',
                        color: '#fff',
                        borderRadius: '4px',
                        '&:hover': {
                        backgroundColor: '#0fb658'
                        }
                        }}
                        >
                        Buy Now
                        </Button>

            
            </div>



            <div className={styles.fixedBuyCase}>
                                <Button 
                    onClick={buyHandler}
                    className={styles.btnClick}
                    sx={{
                        width:'90%',
                        padding: '10px',
                        backgroundColor: '#19d367',
                        color: '#fff',
                        borderRadius: '4px',
                        '&:hover': {
                        backgroundColor: '#0fb658'
                        }
                        }}
                        >
                        Buy Now
                        </Button>
            </div>



        </div>
    )
}