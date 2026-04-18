'use client';

import { useState,useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MobileMenu from "./MobileMenu";

import Hcategories from './Hcategories';
import Modalhead from './Modalhead';
import { usePathname } from "next/navigation";

export default function Header(){
    const pathname = usePathname();

    const hideSearchbar = pathname === "/products";
    

const [open, setOpen] = useState(false)

    const router = useRouter()


    const [homesearch,sethomesearch] = useState('')

    const [showmodal,setshowmodal] = useState(false);
    const [modaltype,setmodaltype] = useState('');

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


    function signhandler(){
        setshowmodal(true)
        setmodaltype('sign')
    }
    function loghandler(){
        setshowmodal(true)
        setmodaltype('log')
    }

    function closehandler(){
        setshowmodal(false)
    }


    function handlehaomesearch(e){
        sethomesearch(e.target.value)
    }
    function handlesearching(e){
        if (e.key == 'Enter'){
            router.push(`/products?homesearch=${homesearch}`)
        }
    }
    function handleiconsearching(){
        router.push(`/products?homesearch=${homesearch}`)
    }

    return(
        <div onMouseOut={hidecats} onMouseOver={keepshowcats} style={{opacity:headerfix=='fixedheader'?'1':'0',display:headisp,zIndex:'9',transition:'all 0.5s ease'}} className={headerfix}>
                <header className="fixedheader" >
                    <MobileMenu/>

            <div className="logo">
                <img className="logo" src="/photos/greenLogo.png" alt="dddd" />
            </div>
            <nav>
                {!hideSearchbar ?<div className="search">
                    <SearchIcon className='searchicon' onClick={handleiconsearching}  sx={{ 
                        bgcolor: '#19d367',         
                        color: '#fff',               
                        borderRadius: '50%',
                        transition: 'all 0.3s ease', 
                        '&:hover': {
                            bgcolor: '#8ab163'         
                            }
                        }}  style={{color:'white',backgroundColor:'#668c3f',width:"35px",height:'35px',borderRadius:'8px'}}/>
                    <input type="text" onKeyDown={handlesearching} onChange={handlehaomesearch}/>
                </div> :''}
                <Link className="navl" href={'/'}>Home</Link>
                <div  onClick={showcats} className="navl cats"  href={'/post'}>Categories <ExpandMoreIcon /></div>
                <Link className="navl" href={'/about'}>About</Link>

                

            </nav>
            <div className="profile">
                {/* <button className="probl" onClick={signhandler}>sign up</button> */}
                <Link href='/cart'>
                    <ShoppingCartIcon className="cartLink"  fontSize="large"/>
                </Link>


                <button className="probr" onClick={loghandler}>log in</button>

            </div>



        </header>
        {catdisp?<Hcategories/>:''}
        
        {showmodal?<Modalhead type={modaltype} signhandler={signhandler} closehandler={closehandler}/>:''}
        </div>

    )
}