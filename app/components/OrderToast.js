'use client'



import styles from "../post/mainproduct.module.css"

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function OrderToast({status , mode}){

    


    return (
        <div className={`${styles.toast} ${!status ? styles.hiddenToast : ''}`} >
            {mode==='buy'?<CheckCircleIcon className={styles.successIcon} fontSize="large"  /> 
            : mode==='cart'? <AddShoppingCartIcon className={styles.successIcon} fontSize="large"/> :''
            }
            
            <span>{mode==='buy'?"Order placed! We'll contact you soon.":mode==='cart'?'Product has been added':''}</span>
        </div>
    )


}