import styles from "../post/mainproduct.module.css";

import StarIcon from '@mui/icons-material/Star';


import Productcard from "./Productcard";


export default function Similair({products}) {

        const productList = products.map(product => {


            //for cart
        const selectedSize =  product.size.filter((el)=>{
                    return el.stock>0
                    })[0].value || ''
        
        
        return    (<Productcard 
            key={product._id} 
            proId={product._id}
            title={product.name} 
            price={product.price} 
            shortdisc={product.description} 
            rate={product.rate} 
            img={product.images} 
            selectedSize={selectedSize}
        />)
})




    return (
        <div className={styles.similair}>
            <h3>Related Products</h3>
            <hr />
            <div className={styles.simicontainer}> 
                            <div className={styles.similairflex}>
                                {productList}
            </div>
            </div>


        </div>
    );
}