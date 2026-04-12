'use client'





import { useCart } from "../context/cartContext"
import CartItem from "../components/CartItem";
import ShipingInfo from "../components/ShipingInfo";


import styles from "./cart.module.css"

export default function Cart() {

    const { cart,removeFromCart,editCartSize,editCartQuantity,clearCart} = useCart();


    const cartProducts = cart.map((item)=>{


        return(
            <CartItem key={item.cartId} item={item} removeFromCart={removeFromCart} editCartSize={editCartSize} editCartQuantity={editCartQuantity}  />
        )

    }

    )








    return (
        <div className={styles.cartPage}>
            <div className={styles.cartItems}>
                <h3>Cart info</h3>
                <div className={styles.brTitle} ></div>
                <div className={styles.cartList}>
                    {cartProducts}
                </div>
            </div>
            
            
            
            <ShipingInfo cart={cart} clearCart={clearCart} />
            
        </div>
    )
}