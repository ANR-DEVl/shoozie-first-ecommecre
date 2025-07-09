
import Button from '@mui/material/Button';

import Articles from './Articles';
import Link from 'next/link';



export default function Content(){




    return (
        <main>
            <div className="categories">
                <div className="cat">
                    <img src="/photos/cats/casual.jpg" alt="" />
                    <Link style={{textDecoration:'none'}} href={'/products'} className="hovertitle"><p>casual style</p></Link>
                </div>
                
                <div className="cat">
                    <img src="/photos/cats/classic.jpg" alt="" />
                    <Link style={{textDecoration:'none'}} href={'/products'} className="hovertitle"><p>classic style</p></Link>
                </div>                
                <div className="cat">
                    <img src="/photos/cats/party.jpg" alt="" />
                    <Link style={{textDecoration:'none'}} href={'/products'}  className="hovertitle"><p>party style</p></Link>
                </div>                
                <div className="cat">
                    <img src="/photos/cats/winter.jpg" alt="" />
                    <Link style={{textDecoration:'none'}} href={'/products'}  className="hovertitle"><p>winter style</p></Link>
                </div>                
                <div className="cat">
                    <img src="/photos/cats/sport.jpg" alt="" />
                    <Link style={{textDecoration:'none'}} href={'/products'}  className="hovertitle"><p>sport style</p></Link>
                </div>
            </div>

            <Articles/>
        </main>

    )
}