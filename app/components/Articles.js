import Button from '@mui/material/Button';
import Link from 'next/link';


export default function Articles(){

    return(
            <div className="articles">
                <div className="show"><video autoPlay muted loop playsInline>
                    <source src='/vids/show.mp4' alt='oooo'/>
                    </video>
                    <div className="showp">
                        <h3>Nike Air Force x-50</h3>
                        <p>this piece is really classy and poopular with teens
                            it will give you a new look
                        </p>
                        <Link  href="/post/c41dbed7-4a7c-4fd4-b073-67ae30ff72cf" >
                            <Button style={{backgroundColor:'#27d87a'}} variant="contained" disableElevation>
                                Buy Now
                            </Button>
                        </Link>
                    </div>
                </div>
                        


                    <div className="topic1">
                        <div className="t1p">
                            <p>Converce Air Max</p>
                        </div>
                        <img src="/photos/starshoe3.jpg" alt="" />
                    </div>
                    <div className="topic2">
                        <img src="/photos/colorshoe2.jpg" alt="" />
                        <div className="t2p">
                            <p>Nike Canon Star</p>
                        </div>
                    </div>
                    <div className="topic3">
                        <div className="t3p"><p>puma sx-77</p></div>
                        <img src="/photos/puma1.jpg" alt="" />
                        
                    </div>
                    <div className="topic4">
                        <div className="t4c">
                            <img src="/photos/starshoe2.jpg" alt="" />
                            <div className="t4p"><p>Star Sniekers </p>
                            <Link  href="/post/53c1743d-bdf2-4a26-a66d-c94ce93230b5" >
                            <Button style={{backgroundColor:'#27d87a'}} variant="contained" disableElevation>
                                Buy Now
                            </Button>
                            </Link>

                            </div>
                        </div>
                    </div>
                
            </div>
    )
}