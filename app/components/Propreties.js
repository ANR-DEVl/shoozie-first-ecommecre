
import styles from "../post/mainproduct.module.css";

import BRating from "./rating";
import Button from '@mui/material/Button';


export default function Propreties(props) {
    return (
        <div className={styles.propreties}>
            <div className={styles.brand}>
                <h2>Shoozie</h2>
            </div>
            <h3>{props.title}</h3>
            <div className={styles.ratebar}>
                <BRating/><span style={{color:'#583101'}}>{props.rate}</span>
            </div>
            

            <div className={styles.disc}>
                <p>
                    {props.disc}</p>
                <span>#MensShoes #StreetStyle #ComfortWear #AirForce #Trending2025 #Sportswear #CasualLook</span>
            
            </div>
            <div className={styles.price}>{`${props.price} $`}</div>
            <div className={styles.opts}>
                <Button 
                    sx={{
                        padding: '10px',
                        backgroundColor: '#19d367',
                        color: '#fff',
                        borderRadius: '4px',
                        '&:hover': {
                        backgroundColor: '#0fb658'
                        }
                        }}
                        >Add to Cart
                    </Button>

                <Button 
                    sx={{
                        padding: '10px',
                        backgroundColor: '#19d367',
                        color: '#fff',
                        borderRadius: '4px',
                        '&:hover': {
                        backgroundColor: '#0fb658'
                        }
                        }}
                        >
                        Buy Now
                        </Button>

            
            </div>



        </div>
    )
}