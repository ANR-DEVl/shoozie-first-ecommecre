'use client';

import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from "react";
import Link from "next/link";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Hcategories from './Hcategories';


export default function Header(){

    const [headerfix,setheaderfix] =useState('fixedheader')
    const [headisp,setheadisp] = useState('flex')
    const [catdisp,setcatdisp] = useState(false)


    function handelfix(){
                    if(innerHeight<scrollY){
                setheaderfix('')
                const myset =setTimeout(()=>{
                    setheadisp('none')
                },500)
                clearTimeout(myset)
            }else{
                setheaderfix('fixedheader')
                setheadisp('flex')
            }
    }

        useEffect(()=>{

            window.addEventListener('scroll',handelfix)
            return () => window.removeEventListener("scroll", handelfix);

        },[])

    function showcats(){
        if(catdisp){
            setcatdisp(false)}else{
                setcatdisp(true)
            }
}
    function keepshowcats(){
        if(catdisp){
            
        setcatdisp(true)}else{
            setcatdisp(false)
        }
}

    function hidecats(){
        setcatdisp(false)
}

    return(
        <div onMouseOut={hidecats} onMouseOver={keepshowcats} style={{opacity:headerfix=='fixedheader'?'1':'0',display:headisp,zIndex:'9',transition:'all 0.5s ease'}} className={headerfix}>
                <header className="fixedheader" >
            <div className="logo">
                <img className="logo" src="/photos/logo.png" alt="dddd" />
            </div>
            <nav>
                <div className="search">
                    <SearchIcon className='searchicon'   sx={{ 
                        bgcolor: '#19d367',         
                        color: '#fff',               
                        borderRadius: '50%',
                        transition: 'all 0.3s ease', 
                        '&:hover': {
                            bgcolor: '#8ab163'         
                            }
                        }}  style={{color:'white',backgroundColor:'#668c3f',width:"35px",height:'35px',borderRadius:'8px'}}/>
                    <input type="text"/>
                </div>
                <Link className="navl" href={'/'}>Home</Link>
                <div  onClick={showcats} className="navl cats"  href={'/post'}>Categories <ExpandMoreIcon /></div>

            </nav>
            <div className="profile">
                <button className="probl">sign up</button>

                <button className="probr">log in</button>

            </div>

        </header>

        {catdisp?<Hcategories/>:''}
        
        
        </div>

    )
}