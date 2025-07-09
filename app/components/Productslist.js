'use client';

// import { useProducts } from "../context/productList";
import { useEffect ,useState} from "react";

import Productcard from "./Productcard";

import styles from '../products/pro.module.css';


export default function Productslist(props) {


    const filterselect = props.filterselect;

    const [products,setproducts] = useState([]);

    useEffect(()=>{

        async function fetchingdata() {
            const res = await fetch('/api/products')
            const data = await res.json()
            setproducts(data)
        }
        fetchingdata();

    },[])







    const productList = products.map(product => {


    const havetitle = filterselect.searchtxt ===''? true: product.title.toLowerCase().includes(filterselect.searchtxt) 

    const havebrand =  filterselect.brand[0]=='all'? true:   filterselect.brand.some((e)=>{
        return product.brand.includes(e)
    })
    const havesize =  filterselect.size[0]=='all'? true:    filterselect.size.some((e)=>{
        return product.size.includes(e)
    })
    const havecategories =  filterselect.categories[0]=='all'? true:    filterselect.categories.some((e)=>{
        return product.Category.includes(e)
    })

    const haveprice =  filterselect.pricerange[0]=='all'? true:    filterselect.pricerange.some((e)=>{
        switch(e){
            case 'r1':{
                return product.price<=50;
                break;
            }
            case 'r2':{
                return product.price>=50&&product.price<=100;
                break;
            }
            case 'r3':{
                return product.price>=100&&product.price<=200;

            }
            case 'r4':{
                return product.price>=200;
            }
        }
    })




    if(havebrand&&havesize&&havecategories&&haveprice&&havetitle){
    return (<Productcard 
        key={product.id} 
        proId={product.id}
        title={product.title} 
        price={product.price} 
        shortdisc={product.shortdisc} 
        rate={product.rate} 
        img={product.img} 
    />)}else{
        return ''
    }
    }

    )

    return (
        <div className={styles.productslist}>

            {productList}

        </div>
    )
}