'use client';




import Imageselector from "../../components/Imageselector"
import Propreties from "../../components/Propreties"
import Overview from "../../components/Overview"
import Similair from "../../components/Similair"
import BuyModal from "@/app/components/BuyModal";
import OrderToast from "@/app/components/OrderToast";


import { useState,useEffect } from "react";


import styles from "../mainproduct.module.css"


export default function Postcontent({postId}) {


    const [product,setproduct] = useState(null);
    const [selectedsize, setselectedsize] = useState('');



    // buy now setup

        const [buyModalState,setBuyModalState] = useState(false)

    function buyModalCloser(){
        setBuyModalState(false)
    }

    function buyHandler(){
        setBuyModalState(true)

    }


//order toast
//success toast

const [orderToastState,setOrderToastStatus] = useState(false);

const [toastMode,setToastMode] = useState('')


function toastHandler(mode){
    setToastMode(mode)
    setOrderToastStatus(true)
    setTimeout(() => {
        setOrderToastStatus(false)
        
    },2000);
}






        useEffect(()=>{
            async function fetchingdata() {
                const res = await fetch(`http://localhost:5000/api/products/${postId}`)
                const data = await res.json()
                const productData = data.data.product
                console.log(productData)
                setproduct(productData)
                setselectedsize(productData.size.filter((el)=>{
                    return el.stock>0
                    })[0].value || ''
                )
            }
            fetchingdata();
    
        },[])





        //size selecting for cart


        function sizeSwitch(e) {
        console.log(e.currentTarget.getAttribute("data-size"));

        setselectedsize(e.currentTarget.getAttribute("data-size"));

    }








            //fetching simillair

        const [products,setproducts] = useState([]);

    useEffect(()=>{

        async function fetchingdata() {
            const res = await fetch('http://localhost:5000/api/products?limit=24&page=1')
            const data = await res.json()
            const productsData = data.data.products
            // console.log(productsData)
            setproducts(productsData)
        }
        fetchingdata();

    },[])


    if (!product){
        return(<>....loading</>)
    }
    
    













    return (
        <>
            {<OrderToast mode={toastMode} status={orderToastState} /> }
            {buyModalState? <BuyModal toastHandler={toastHandler} onClose={buyModalCloser} sizeArray={product.size} id={product._id} name={product.name} price={product.price} mainImg={product.images[0]}  />:''}
            <div className={styles.mainproduct}>

                <Imageselector img={product.images} sizeArray={product.size} sizeSwitch={sizeSwitch} selectedsize={selectedsize}/>
                <Propreties img={product.images} toastHandler={toastHandler} buyHandler={buyHandler} title={product.name} sizeArray={product.size} rate={product.rate} price={product.price} disc={product.description} id={product._id} selectedSize={selectedsize}/>
            </div>
            <Overview disc={product.description}  highlights={product.highlights}/>
            <div className={styles.mybr}></div>

            <Similair products={products}/>

        </>
    )
}


