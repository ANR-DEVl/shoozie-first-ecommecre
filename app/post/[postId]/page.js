
import Imageselector from "../../components/Imageselector"
import Propreties from "../../components/Propreties"
import Overview from "../../components/Overview"
import Similair from "../../components/Similair"

import Postcontent from "./Postcontent"

import { products } from "@/app/context/productsdata"



import styles from "../mainproduct.module.css"

export default async function Postpage(props) {



    const postId = await props.params.postId


    return (
        <div className="postpage">
            <Postcontent postId={postId} products={products}/>

        </div>
    )
}