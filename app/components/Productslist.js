'use client';

// import { useProducts } from "../context/productList";
import { useEffect ,useState} from "react";

import Productcard from "./Productcard";

import styles from '../products/pro.module.css';


export default function Productslist(props) {

    const API = process.env.NEXT_PUBLIC_API_URL;






    const filterselect = props.filterselect;

    const [products,setproducts] = useState([]);

    useEffect(()=>{

        async function fetchingdata() {
            const res = await fetch(`${API}/api/products?limit=24&page=1&search=${filterselect.searchtxt}`);
            const data = await res.json();
            const productsData = data.data.products
            setproducts(productsData)
        }
        fetchingdata();

    },[])











    const productList = products.map(product => {


    const havetitle = filterselect.searchtxt ===''? true: product.name.toLowerCase().includes(filterselect.searchtxt) 

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

//for cart
        const selectedSize =  product.size.filter((el)=>{
                    return el.stock>0
                    })[0].value || ''




    if(havebrand&&havesize&&havecategories&&haveprice&&havetitle){
    return (<Productcard 
        key={product._id} 
        proId={product._id}
        title={product.name} 
        price={product.price} 
        shortdisc={product.description} 
        rate={product.rate} 
        img={product.images} 
        selectedSize={selectedSize}
        sizeArray={product.size}
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