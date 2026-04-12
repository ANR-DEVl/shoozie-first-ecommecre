'use client';



import { createContext, useContext, useState , useEffect } from "react";


const CartContext = createContext();


export function CartProvider({ children }) {
    // const storageCart = JSON.parse(localStorage.cart)||[]
    const [cart, setcart] = useState([]);

        useEffect(() => {
        const saved = localStorage.getItem('cart')
        if (saved) {
            setcart(JSON.parse(saved))
        }
    }, [])

    useEffect(()=>{

        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    function addToCart(orderedProduct) {
        const existingItem = cart.find((item)=>{
            return item.cartId === orderedProduct.cartId
        })
        if(existingItem){
            return;
        }
        setcart([...cart, orderedProduct]);
    }

    function removeFromCart(selectedId){
        const updatedCart = cart.filter((el)=>{
            return el.cartId !== selectedId
        })
        setcart(updatedCart)

    }

    function editCartQuantity(selectedId,selectedQuantity){
        const updatedCart = cart.map((el)=>{
            if(el.cartId===selectedId){
                return {...el,quantity : selectedQuantity}
            }else{
                return el
            }
        })
        setcart(updatedCart)

    }

        function editCartSize(selectedId,selectedSize){
        const updatedCart = cart.map((el)=>{
            if(el.cartId===selectedId){
                return {...el,orderedSize : selectedSize}
            }else{
                return el
            }
        })
        setcart(updatedCart)
    }

        function clearCart(){

        setcart([])

    }

    return (
        <CartContext.Provider value={{ cart, addToCart,removeFromCart,editCartSize,editCartQuantity,clearCart }}>
            {children}
        </CartContext.Provider>
    );
}



export function useCart() {
    return useContext(CartContext);
}







