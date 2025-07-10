
import Imageselector from "../../components/Imageselector"
import Propreties from "../../components/Propreties"
import Overview from "../../components/Overview"
import Similair from "../../components/Similair"

import Postcontent from "./Postcontent"

// import { products } from "@/app/context/productsdata"

import { headers } from 'next/headers';

import styles from "../mainproduct.module.css"

export default async function Postpage(props) {
    const headersList = headers();


    const host = headersList.get('host');


    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';


    const origin = `${protocol}://${host}`;


const res = await fetch(`${origin}/api/products`, {
    next: { revalidate: 0 }  
})

    const products = await res.json()



    const postId = await props.params.postId


    return (
        <div className="postpage">
            <Postcontent postId={postId} products={products}/>

        </div>
    )
}