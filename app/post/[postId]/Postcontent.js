'use client';




import Imageselector from "../../components/Imageselector"
import Propreties from "../../components/Propreties"
import Overview from "../../components/Overview"
import Similair from "../../components/Similair"

import { useState } from "react";


import styles from "../mainproduct.module.css"


export default function Postcontent({postId,products}) {

    const product = products.find(product => product.id == postId);

    return (
        <>
            <div className={styles.mainproduct}>

                <Imageselector img={product.img}/>
                <Propreties title={product.title} rate={product.rate} price={product.price} disc={product.shortdisc}  />
            </div>
            <Overview disc={product.disc}  highlights={product.highlights}/>
            <div className={styles.mybr}></div>

            <Similair products={products}/>

        </>
    )
}


