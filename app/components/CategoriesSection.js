
import Link from 'next/link';



export default function CategoriesSection(){

    const cats = [
        {name:'Casual',ico:"🦶",count:'67'},
        {name:'Classic',ico:"👞",count:'34'},
        {name:'Sport',ico:"👟",count:'95'},
        {name:"Sandals",ico:"🩴",count:'186'},
        {name:"Women's shoes",ico:"👠",count:'23'},
        {name:"boots",ico:"🥾",count:'45'}
    ]


    const catsElements =cats.map((el)=>{

        return(
            <Link style={{textDecoration:'none'}} href={'/products'} className="homeCat" key={el.name}>
                <div className="catIcon">{el.ico}</div>
                <div className="catInfo">
                    <h4>{el.name}</h4>
                    <p>{el.count} products</p>
                </div>
                
            </Link>
        )
    })


    return (
        <div className='categoriesSection'>
            <div className="catsHeader">
                <h3>Categories</h3>
            </div>
            <div className="catsbox">
                {catsElements}
            </div>

        </div>
    )
}


