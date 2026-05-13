'use client'

import styles from '../cart/cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link'

import { useState,useEffect,useRef } from "react"


export default function CartItem({item,removeFromCart,editCartSize,editCartQuantity}){

    const isFirstRender = useRef(true); 


    // const [productItem,setProductItem] = useState(null);

    const [itemQuantity,setItemQuantity] = useState(item.quantity);
    const [selectedSize,setSelectedSize] = useState(item.orderedSize);

    const ItemId = item.cartId

    useEffect(()=>{
        if (isFirstRender.current) return;
        editCartQuantity(ItemId,itemQuantity)
    },[itemQuantity])

// function handleQuantityPlus(value){
//     setSelectedSize(value)
//     editCartSize(ItemId,value)
// }






    // useEffect(()=>{
    //     if (isFirstRender.current) return;
    // },[selectedSize])


function handleSizeChanging(value){
    setSelectedSize(value)
    editCartSize(ItemId,value)

}








        //quantity limitation

useEffect(()=>{
            // if (!productItem) return ;
        if (isFirstRender.current) {

            return;}

    const selectedStockObject = item.sizeArray.find((el)=>{
        return selectedSize===el.value
    })


    if(selectedStockObject.stock<=itemQuantity){
        setItemQuantity(selectedStockObject.stock)
    }

},[itemQuantity,selectedSize])



    useEffect(() => {
    isFirstRender.current = false; // ✅ هنا بس في useEffect منفصل
}, [])












    return(
        <div className={styles.itemContainer}>
            <div className={styles.itemInfo} >
                <Link href={`/post/${item.productId}`} className={styles.productInfo} >
                <img src={`/photos/${item.img[0]}.jpg`} alt="pro img" />
                <div className={styles.itemTitle}>
                    <h4>{item.name}</h4>
                    <p style={{fontSize:'20px'}}>{item.price}$</p>
                </div>
                </Link>

                <div className={styles.editingItem}>
                    <div  className={styles.qtyControl}>
                        <button className={styles.quantityBtn} onClick={() => setItemQuantity(q => Math.max(1, q - 1))}>-</button>
                        <span style={{ marginBottom:'15px'}}>{item.quantity}</span>
                        <button className={styles.quantityBtn} onClick={() => setItemQuantity(q => Math.min(5, q + 1))}>+</button>
                    </div>
                    <DeleteIcon className={styles.deleteBtn} fontSize="large"  style={{marginBottom:'20px',color:'#00a545'}} onClick={()=>{removeFromCart(ItemId)}} />
                </div>
            </div>



            <div className={styles.sizeOptions}>
                {item.sizeArray.map((s) =>{
                    if(s.stock>0){                                    
                        return (
                            <div
                                key={s.value}
                                className={`${styles.sizeOption} ${s.value === selectedSize ? styles.selectedSize : ''}`}
                                onClick={()=>{handleSizeChanging(s.value)} }>
                                    {s.value}
                            </div>
                        )}
                    } )}
            </div>


        </div>
    )





}


