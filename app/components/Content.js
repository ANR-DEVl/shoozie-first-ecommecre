
import Button from '@mui/material/Button';

import Articles from './Articles';




export default function Content(){




    return (
        <main>
            <div className="categories">
                <div className="cat">
                    <img src="/photos/cats/casual.jpg" alt="" />
                    <div className="hovertitle"><p>casual style</p></div>
                </div>
                
                <div className="cat">
                    <img src="/photos/cats/classic.jpg" alt="" />
                    <div className="hovertitle"><p>classic style</p></div>
                </div>                
                <div className="cat">
                    <img src="/photos/cats/party.jpg" alt="" />
                    <div className="hovertitle"><p>party style</p></div>
                </div>                
                <div className="cat">
                    <img src="/photos/cats/winter.jpg" alt="" />
                    <div className="hovertitle"><p>winter style</p></div>
                </div>                
                <div className="cat">
                    <img src="/photos/cats/sport.jpg" alt="" />
                    <div className="hovertitle"><p>sport style</p></div>
                </div>
            </div>

            <Articles/>
        </main>

    )
}