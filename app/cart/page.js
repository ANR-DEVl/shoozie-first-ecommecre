'use client'





import { useCart } from "../context/cartContext"
import CartItem from "../components/CartItem";
import ShipingInfo from "../components/ShipingInfo";



import styles from "./cart.module.css"

export default function Cart() {

    const { cart,removeFromCart,editCartSize,editCartQuantity,clearCart} = useCart();


    //total calculation
const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
}, 0)








    const cartProducts = cart.map((item)=>{


        return(
            <CartItem key={item.cartId} item={item}  removeFromCart={removeFromCart} editCartSize={editCartSize} editCartQuantity={editCartQuantity}  />
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
                <div className={styles.totalCase}>
                    <h4>Total</h4>
                    <span>{totalPrice.toFixed(2)}$</span>
                </div>
            </div>
            
            
            
            <ShipingInfo cart={cart} clearCart={clearCart} />
            
        </div>
    )
}