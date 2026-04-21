'use client';

// import { useProducts } from "../context/productList";
import { useEffect ,useState} from "react";

import Productcard from "./Productcard";

import styles from '../products/pro.module.css';


export default function Productslist(props) {

    const API = process.env.NEXT_PUBLIC_API_URL;






    const filterselect = props.filterselect;

    const [products,setproducts] = useState([]);

    // useEffect(()=>{

    //     async function fetchingdata() {
    //         const res = await fetch(`${API}/api/products?limit=24&page=1&search=${filterselect.searchtxt}`);
    //         const data = await res.json();
    //         const productsData = data.data.products
    //         setproducts(productsData)
    //     }
    //     fetchingdata();

    // },[])





    useEffect(() => {

    async function fetchingdata() {

    const params = new URLSearchParams();

    params.append('page', '1');
    params.append('limit', '24');

    if (filterselect.searchtxt)
        params.append('search', filterselect.searchtxt);

    if (filterselect.categories[0] !== 'all')
        params.append('categories', filterselect.categories.join(','));

    if (filterselect.brand[0] !== 'all')
        params.append('brand', filterselect.brand.join(','));

    if (filterselect.size[0] !== 'all')
        params.append('size', filterselect.size.join(','));

    if (filterselect.pricerange[0] !== 'all')
        params.append('price', filterselect.pricerange.join(','));

    if (props.sort)
        params.append('sort', props.sort);

    const res = await fetch(`${API}/api/products?${params.toString()}`);
    const data = await res.json();

    setproducts(data.data.products);
    }

    fetchingdata();

}, [filterselect, props.sort]);











    const productList = products.map(product => {










//for cart
        const selectedSize =  product.size.filter((el)=>{
                    return el.stock>0
                    })[0].value || ''





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
    />)
    }

    )

    return (
        <div className={styles.productslist}>

            {productList}

        </div>
    )
}