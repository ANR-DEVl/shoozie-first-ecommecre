'use client'

import { useRef } from 'react'
import Link from 'next/link'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'


import { useState,useEffect } from 'react'


export default function TopSellers() {



    const API = process.env.NEXT_PUBLIC_API_URL;


        const [topSellers,setTopSellers] = useState([]);

    useEffect(()=>{

        async function fetchingdata() {
            const res = await fetch(`${API}/api/products?limit=24&page=1`)
            const data = await res.json()
            const productsData = data.data.products
            // console.log(productsData)
            setTopSellers(productsData)
        }
        fetchingdata();

    },[])

    if (!topSellers){
        return(<>....loading</>)
    }







    const scrollRef = useRef(null)

    function scrollLeft() {
        scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' })
    }

    function scrollRight() {
        scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' })
    }

    return (
        <div className="topSellers">

            <div className="catsHeader">
                <h3>New Arrivals</h3>
            </div>

            <div className="tapeWrapper">
                <button className="arrowBtn leftArrow" onClick={scrollLeft}>
                    <ArrowBackIosIcon style={{ fontSize: '20px' }} />
                </button>

                <div className="tape" ref={scrollRef}>
                    {topSellers.map((product) => (
                        <Link
                            key={product._id}
                            href={`/post/${product._id}`}
                            className="tapeCard"
                        >
                            <img
                                src={`/photos/${product.images[2]}.jpg`}
                                alt={product.name}
                                className="tapeImg"
                            />
                            <div className="tapeInfo">
                                <h4>{product.name}</h4>
                                <div className="tapePr">
                                    <span className="tapePrice">${product.price}</span>
                                    <span className="tapeRating">
                                        {'★'.repeat(product.rate)}{'☆'.repeat(5 - product.rate)}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <button className="arrowBtn rightArrow" onClick={scrollRight}>
                    <ArrowForwardIosIcon style={{ fontSize: '20px' }} />
                </button>
            </div>
        </div>
    )
}