'use client'

import styles from '../cart/cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';


import { useState,useEffect } from "react"


export default function CartItem({item,removeFromCart,editCartSize,editCartQuantity}){

    const [productItem,setProductItem] = useState(null);

    const [itemQuantity,setItemQuantity] = useState(item.quantity);
    const [selectedSize,setSelectedSize] = useState(item.orderedSize);

    const ItemId = item.cartId

    useEffect(()=>{
        editCartQuantity(ItemId,itemQuantity)
    },[itemQuantity])

    useEffect(()=>{
        editCartSize(ItemId,selectedSize)
    },[selectedSize])

        useEffect(()=>{
            let isMounted = true;
            async function fetchingdata() {
                const res = await fetch(`http://localhost:5000/api/products/${item.productId}`)
                const data = await res.json()
                const productData = data.data.product
                console.log(productData)
                setProductItem(productData)
            }
            fetchingdata();
            return () => { isMounted = false }
    
        },[])









        //quantity limitation

useEffect(()=>{
            if (!productItem) return ;

    const selectedStockObject = productItem.size.find((el)=>{
        return selectedSize===el.value
    })


    if(selectedStockObject.stock<=itemQuantity){
        setItemQuantity(selectedStockObject.stock)
    }

},[itemQuantity,selectedSize])

        if (!productItem) return <div>Loading...</div>

    return(
        <div className={styles.itemContainer}>
            <div className={styles.itemInfo} >
                <div className={styles.productInfo} >
                <img src={`/photos/${productItem.images[0]}.jpg`} alt="pro img" />
                <div className={styles.itemTitle}>
                    <h4>{productItem.name}</h4>
                    <p style={{fontSize:'20px'}}>{productItem.price}</p>
                </div>
                </div>

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
                {productItem.size.map((s) =>{
                    if(s.stock>0){                                    
                        return (
                            <div
                                key={s.value}
                                className={`${styles.sizeOption} ${s.value === selectedSize ? styles.selectedSize : ''}`}
                                onClick={() => setSelectedSize(s.value)}>
                                    {s.value}
                            </div>
                        )}
                    } )}
            </div>


        </div>
    )





}


