import styles from "../post/mainproduct.module.css";

import StarIcon from '@mui/icons-material/Star';


import Productcard from "./Productcard";


export default function Similair({products}) {

        const productList = products.map(product => (
        <Productcard 
            key={product.id} 
            proId={product.id}
            title={product.title} 
            price={product.price} 
            shortdisc={product.shortdisc} 
            rate={product.rate} 
            img={product.img} 
        />
        ))




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