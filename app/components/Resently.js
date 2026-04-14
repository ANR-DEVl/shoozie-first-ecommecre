'use client'

import { useRef } from 'react'
import Link from 'next/link'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

const topSellers = [
    { id: '1', name: 'Bloom classy', price: 180, img: 'classicBlack2', rate: 4 },
    { id: '2', name: 'High Blacky', price: 220, img: 'leatherParty2', rate: 4 },
    { id: '3', name: 'Oxford Elite', price: 300, img: 'adidas3', rate: 5 },
    { id: '4', name: 'Nike Air Max 270', price: 145, img: 'talon1', rate: 4 },
    { id: '5', name: 'Elara Heel', price: 90, img: 'puma2', rate: 4 },
    { id: '6', name: 'Urban Stride', price: 134, img: 'adidas1', rate: 3 },
    { id: '7', name: 'Ironridge Boot', price: 250, img: 'nova3', rate: 5 },
    { id: '8', name: 'Elara Heel', price: 900, img: 'highBlack2', rate: 4 },
]

export default function TopSellers() {

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
                            key={product.id}
                            href={`/post/${product.id}`}
                            className="tapeCard"
                        >
                            <img
                                src={`/photos/${product.img}.jpg`}
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