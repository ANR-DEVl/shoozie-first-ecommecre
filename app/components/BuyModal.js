
'use client';

import { useEffect, useState } from "react";


import styles from '@/app/post/mainproduct.module.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import destination from '../../public/data/Commune_Of_Algeria.json'

import { useRouter } from 'next/navigation'




export default function BuyModal(props) {
    const API = process.env.NEXT_PUBLIC_API_URL;

    const router = useRouter()
    

    const {id,name,price,mainImg,sizeArray,onClose,toastHandler} = props

    const [step, setStep] = useState(1);
    const [selectedSize, setSelectedSize] = useState(sizeArray.filter((el)=>{
        return el.stock>0
    })[0].value || '');
    const [quantity, setQuantity] = useState(1);
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


    //order button

    async function handleConfirm() {
        if (!clientData.fullName || !clientData.phone || !clientData.address.city || !clientData.address.commune) {
            console.log(clientData)
            alert('Please fill all required fields');
            return;
        }
        const order = {
            clientData:{
                fullName:clientData.fullName,
                phone:clientData.phone,
                opt2:clientData.opt2,
                location:clientData.address},
            orderData : {
                products :[{
                    productId: id,
                    name,
                    quantity,
                    properties:{size: selectedSize}
                }]
            }
        };

        //api post req

        const res = await fetch(`${API}/api/orders`,
            {
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify(order)
        }).then(toastHandler('buy'))
        const data = await res.json()
                if (data.status === 'success') {
            router.push(`/order-success?orderId=${data.data.newOrder._id}&name=${clientData.fullName}&total=${data.data.newOrder.orderData.total}&city=${clientData.address.city}&commune=${clientData.address.commune}&items=${1}`)
}


        console.log(`order setup :::` ,order);
        console.log(`+++res+++ `,data);
        onClose();
    }



//quantity limitation

useEffect(()=>{

    const selectedStockObject = sizeArray.find((el)=>{
        return selectedSize===el.value
    })


    if(selectedStockObject.stock<=quantity){
        setQuantity(selectedStockObject.stock)
    }

},[quantity,selectedSize])














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








    return (
        <div className={styles.buyBlur}>
            <div className={styles.buyModal}>

                {/* Header */}
                <div className={styles.buyHeader}>
                    <h3>Buy now</h3>
                    <HighlightOffIcon onClick={onClose} className={styles.close}  />
                </div>

                {/* Steps indicator */}
                <div className={styles.steps}>
                    <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}></div>
                    <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}></div>
                </div>

                {/* Step 1: Size & Quantity */}
                {step === 1 && (
                    <div>
                        {/* Product summary */}
                        <div className={styles.productSummary}>
                            <img src={`/photos/${mainImg}.jpg`} alt={name} />
                            <div>
                                <p className={styles.buyName}>{name}</p>
                                <p style={{fontSize:'20px'}}>{price} $</p>
                            </div>
                        </div>

                        {/* Size */}
                        <div className={styles.section}>
                            <label style={{color:'gray',fontSize:'20px'}}>Size</label>
                            <div className={styles.sizeOptions}>
                                {sizeArray.map((s) =>{
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

                        {/* Quantity */}
                        <div className={styles.section}>
                            <label style={{color:'gray',fontSize:'20px'}}>Quantity</label>
                            <div style={{marginBottom:'15px',marginTop:'5px', display:'flex',alignItems:'center'}} className={styles.qtyControl}>
                                <button className={styles.quantityBtn} onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                                <span style={{marginRight:'12px',marginLeft:'12px' , marginBottom:'15px'}}>{quantity}</span>
                                <button className={styles.quantityBtn} onClick={() => setQuantity(q => Math.min(5, q + 1))}>+</button>
                            </div>
                        </div>

                        {/*buttons*/}
                        <div className={styles.actions}>
                            <button onClick={onClose}>Cancel</button>
                            <button onClick={() => setStep(2)} className={styles.primary}>Next</button>
                        </div>
                    </div>
                )}

                {/* Step 2: Shipping Info */}
                {step === 2 && (
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


                        {/* buttons */}

                        <div className={styles.actions}>
                            <button onClick={() => setStep(1)}>Back</button>
                            <button onClick={handleConfirm} className={styles.primary}>Confirm</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}



