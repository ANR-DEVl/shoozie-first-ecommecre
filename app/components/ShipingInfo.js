'use client'


import { useState , useEffect} from "react"


import destination from '../../public/data/Commune_Of_Algeria.json'


import styles from '../cart/cart.module.css'

import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import OrderToast from "./OrderToast";
import { useRouter } from 'next/navigation'



export default function ShipingInfo({cart,clearCart}){
    const API = process.env.NEXT_PUBLIC_API_URL;

    const router = useRouter()



        const [orderToastStatus,setOrderToastStatus] = useState(false)

    function toastHandler(){
        setOrderToastStatus(true)
        setTimeout(() => {
            setOrderToastStatus(false)
    },4000);
}


        //shiping 

        const [clientData, setclientData] = useState({
            fullName: '',
            phone: '',
            opt2: '',
            address:{
                city: '',
                commune: '',
                postCode :'5555'
            }
        });


        const [agreed, setAgreed] = useState(false);


    const [products,setProducts] = useState([])

        const [productsStatus,setProductsStatus] = useState(false)











            //location data

    const [selectedCityId,setSelectedCityId] = useState(0)



    //city

    let cityId = 1

    const cityOpts = destination.map((city)=>{
        if(city.wilaya_id==cityId){
            cityId++;
            return (<option key={city.wilaya_id} value={city.name}>{city.name}</option>)
        }
        else{
            return null
        }
    })


    //commune



    const communeOpts = destination.map((commune)=>{
        if(commune.wilaya_id==selectedCityId&& clientData.address.city!==commune.name){
            return (<option key={commune.name} value={commune.name}>{commune.name}</option>)
        }
        else{
            return null
        }
    })






    useEffect(()=>{
        const cityObject = destination.find((el)=>{
            return el.name === clientData.address.city
        })
        if(!cityObject){
            return ;
        }
        setSelectedCityId(cityObject.wilaya_id)

    },[clientData.address.city])


//products array

useEffect(()=>{
    const newProducts = cart.map((item)=>{

        return {productId:item.productId , name:item.name , quantity:item.quantity , properties:{size:item.orderedSize}}
    })

    setProducts(newProducts)

},[cart])




    //order button

    async function handleConfirm() {
        if (!clientData.fullName || !clientData.phone || !clientData.address.city || !clientData.address.commune ) {
            console.log(clientData)
            alert('Please fill all required fields');
            return;
        }
                if (products.length===0) {
            alert('there are no items in the cart');
            return;
        }
        const order = {
            clientData:{
                fullName:clientData.fullName,
                phone:clientData.phone,
                opt2:clientData.opt2,
                location:clientData.address},
            orderData : {
                products 
            }
        };

        //api post req

        const res = await fetch(`${API}/api/orders`,
            {
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify(order)

        })
        const data = await res.json()

        if (data.status === 'success') {
            toastHandler('buy') 
            clearCart()
            router.push(`/order-success?orderId=${data.data.newOrder._id}&name=${clientData.fullName}&total=${data.data.newOrder.orderData.total}&city=${clientData.address.city}&commune=${clientData.address.commune}&items=${cart.length}`)
}


        console.log(`order setup :::` ,order);
        console.log(`+++res+++ `,data);



    }




return (
                <div className={styles.shipingInfo}>
                    <OrderToast mode={'buy'}  status={orderToastStatus} />
                <h3>Shiping info</h3>
                <div>
                        <input
                            className={styles.clientInput}
                            type="text"
                            placeholder="Full name"
                            value={clientData.fullName}
                            onChange={(e) => setclientData({ ...clientData, fullName: e.target.value })}
                        />
                        <input
                            className={styles.clientInput}
                            type="text"
                            placeholder="Phone"
                            value={clientData.phone}
                            onChange={(e) => setclientData({ ...clientData, phone: e.target.value })}
                        />
                        <input
                            className={styles.clientInput}
                            type="text"
                            placeholder="Phone or email (optional)"
                            value={clientData.opt2}
                            onChange={(e) => setclientData({ ...clientData, opt2: e.target.value })}
                        />
                        <select
                            className={styles.clientSelect}
                            value={clientData.address.city}
                            onChange={(e) => setclientData({ ...clientData, address:{...clientData.address,city: e.target.value} })}
                        >
                            <option value="">Select city</option>
                            {cityOpts}
                        </select>
                        <select
                            className={styles.clientSelect}
                            value={clientData.address.commune}
                            onChange={(e) => setclientData({ ...clientData, address:{...clientData.address, commune: e.target.value }})}
                        >
                            <option value="">Select commune</option>
                            {communeOpts}
                        </select>
                        <label className={styles.agreeLabel}>
                            <input
                                type="checkbox"
                                className={styles.agreeCheckbox}
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <span>I agree to the terms and conditions</span>
                        </label>


                        {/* buttons */}

                        <div className={styles.actions}>
                            <button onClick={clearCart}  ><RemoveShoppingCartIcon /></button>
                            <button disabled={!agreed || products.length===0 || !clientData.fullName || !clientData.phone || !clientData.address.city || !clientData.address.commune} 
                            style={{ opacity: agreed &&products.length !==0 && clientData.fullName && clientData.phone && clientData.address.city && clientData.address.commune ? 1 : 0.5 }} onClick={handleConfirm} className={styles.primary}>Checkout</button>
                        </div>
                    </div>
            </div>
)




}



