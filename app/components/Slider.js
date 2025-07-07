'use client';

import { useEffect, useState } from "react";


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Slider(){
    
    

    const [slidepush,setslidepush] =useState(0);




    useEffect(()=>{
            const interval =setInterval(()=>{
            setslidepush(prev => (prev < 400 ? prev + 100 : 0));
    }
    ,4000)

    return () => clearInterval(interval);
},[])

function forward (){
                setslidepush(prev => (prev < 400 ? prev + 100 : 0));
}
function previous (){
                setslidepush(prev => (prev > 0 ? prev - 100 : 400));
}




    return (
        <div className="slidercase">
            <div className="imgbelt" style={{
                transform: `translateX(-${slidepush}%)`,
            }}>
                <img style={{width:'100%'}} src="/photos/slides/slide1.jpeg" alt="noooooo" />
                <img style={{width:'100%'}} src="/photos/slides/slide2.jpg" alt="noooooo" />
                <img style={{width:'100%'}} src="/photos/slides/slide3.jpeg" alt="noooooo" />
                <img style={{width:'100%'}} src="/photos/slides/slide4.jpg" alt="noooooo" />
                <img style={{width:'100%'}} src="/photos/slides/slide5.jpg" alt="noooooo" />
            </div>

            <div className="switchcase">
                <div className="leftswitch" onClick={previous}>
                    <ArrowBackIosIcon style={{fontSize:'60px',marginLeft:'18px',  color: '#60646ea6'}}/>
                </div>
                <div className="rightswitch" onClick={forward}>
                    <ArrowForwardIosIcon style={{fontSize:'60px',marginRight:'8px',  color: '#60646ea6'}}/>
                </div>
            </div>

        </div>
    )
}
