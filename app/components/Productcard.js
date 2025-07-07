import styles from "../post/mainproduct.module.css";
import StarIcon from '@mui/icons-material/Star';

import Link from "next/link";


export default function Productcard({title, price, shortdisc, rate, img,proId}) {





    return (
        <Link href={`/post/${proId}`} className={styles.productcard}>
            <div className={styles.fixedbtn}>
                <button className={styles['added']}>Add to Cart</button>
            </div>
            <img src={`/photos/${img}1.jpg`} alt="ppp" />
            <h4>{title}</h4>
            <hr />
            <p className={styles.disc}>{shortdisc}</p>
            <div className={styles.pr}>
                <p className={styles.price}>{`${price}$`}</p>
                <div className={styles.rating}>
                    {rate}
                    <StarIcon style={{color:'yellow'}}/>
                </div>
            </div>
        </Link>
    )
}