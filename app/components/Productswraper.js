'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';

import styles from '../products/pro.module.css'

import { useState ,useEffect} from 'react';

import Productslist from './Productslist';

import { useSearchParams } from 'next/navigation';




export default function Productswraper(){

  const [showfilter,setshowfilter] = useState(false)

  const searchparams = useSearchParams()

  const homesearch = searchparams.get('homesearch')??'';

  const mysizes = ['s37','s38','39','s40','s41','s42'];


  const sizeObject = mysizes.reduce((acc, curr) => {
  acc[curr] = false;
  return acc;
}, {});

    const [search,setsearch] = useState('')

    const [isExpandedcategories, setIsExpandedcategories] = useState(false);
    const [isExpandedsize, setIsExpandedsize] = useState(false);
    const [isExpandedbrand, setIsExpandedbrand] = useState(false);
    const [isExpandedprice, setIsExpandedprice] = useState(false);
    const [isExpandedsort, setIsExpandedsort] = useState(false);

    const [categories,setcategories] = useState({all:true , modern:false ,sports:false,classic:false,classy:false})
    const [size,setsize] = useState({all:true ,s37:false,s38:false ,s39:false,s40:false,s41:false,s42:false})
    const [brand,setbrand] = useState({all:true ,adidas:false ,puma:false,nike:false,converce:false,reebok:false})
    const [price,setprice] = useState({all:true ,r1:false ,r2:false,r3:false,r4:false})
    const [sort,setsort] = useState({latest:false ,low:false,high:false})


    const [filterselect,setfilterselect] = useState({
      categories:['all'],
      pricerange: ['all'],
      brand : ['all'],
      size:['all'],
      searchtxt : ''
    })


    useEffect(()=>{
      setsearch(homesearch)

    },[homesearch])







    function applyfilter(){

      let selectedcategories = categories.all ? ['all']: Object.keys(categories).filter((e)=>{
          return categories[e]==true
      }) 

      selectedcategories.length ===0? selectedcategories= ['all']:'';


      let selectedbrand = brand.all ? ['all']: Object.keys(brand).filter((e)=>{
          return brand[e]==true
      })

      selectedbrand.length ===0? selectedbrand= ['all']:'';


      let selectedsize = size.all ? ['all']: Object.keys(size).filter((e)=>{
          return size[e]==true
      }) 

      selectedsize.length ===0? selectedsize= ['all']:'';


      let selectedprice = price.all ? ['all']: Object.keys(price).filter((e)=>{
          return price[e]==true
      })

      selectedprice.length ===0? selectedprice= ['all']:'';




      setfilterselect({
        categories : selectedcategories,
        pricerange : selectedprice,
        brand :selectedbrand,
        size :selectedsize,
        searchtxt: homesearch ||search,
      })
    }

    useEffect(()=>{
            setfilterselect((pr)=>{
              return {...pr,searchtxt:homesearch}
    })

    },[homesearch])


    useEffect(()=>{
      applyfilter()
    },[homesearch])





    return (
        <div className={styles.productsPage}>
          <div onClick={()=>{setshowfilter((pr)=>!pr)}} className={`${styles.filtertoggle} ${showfilter?styles.toggleon:''}`}>
            <FilterListIcon style={{transform:"translate(2px,2px)"}}/>
          </div>
            <div className={`${styles.filterbar} ${showfilter? styles.filteron:''}`}>
                <div className={styles.selectes}>
                    <div className={styles.filtersearch}>
  <input
    value={search}
    onChange={(e)=>{setsearch(e.target.value)}}
    type="text"
    placeholder="Search products..."
    className={styles.searchinput}
  />
</div>
  <div className={styles.filtergroup } style={{maxHeight: isExpandedcategories?'3000px':'', overflow: 'hidden'}}>
      <div className={styles.filtertab} onClick={() => setIsExpandedcategories(!isExpandedcategories)}>
        <div className={styles.filtertitle}>Categories</div>

        <ExpandMoreIcon  style={{color:'#3c5a1d', rotate: isExpandedcategories?'':'-90deg',transition: 'all 0.8s ease'}}/>
      </div>
      <div className={styles.filteropts}>
        <div className={styles.filteropt} onClick={()=>{setcategories((pr)=>{
          if(!pr.all){
            return {modern:false,classy:false,classic:false,sports:false, all:!pr.all}
          }else{
            return {...pr,all:!pr.all}
          }
          
        })}}>
          <input readOnly id='zero' checked={categories.all} type="checkbox" />
          <label >All</label>
        </div>
        
        <div className={styles.filteropt} onClick={()=>{setcategories((pr)=>{
          
          return {...pr,modern: !pr.modern,all:false}
        })}}>
          <input readOnly id='first' checked={categories.modern} type="checkbox" />
          <label >Modern</label>
        </div>
        <div className={styles.filteropt} onClick={()=>{setcategories((pr)=>{
          return {...pr,sports:!pr.sports,all:false}
        })}}>
          <input readOnly id='sec' checked={categories.sports} type="checkbox" />
          <label >Sports</label>
        </div>
        <div className={styles.filteropt} onClick={()=>{setcategories((pr)=>{
          return {...pr,classic:!pr.classic,all:false}
        })}}>
          <input readOnly id='third' checked={categories.classic} type="checkbox" />
          <label >Classic</label>  
        </div>
        <div className={styles.filteropt} onClick={()=>{setcategories((pr)=>{
          return {...pr,classy:!pr.classy,all:false}
        })}}>
          <input readOnly id='fourth' checked={categories.classy} type="checkbox" />
          <label >Classy</label>
        </div>



      </div>
  </div>














  <div className={styles.filtergroup } style={{maxHeight: isExpandedsize?'3000px':'', overflow: 'hidden'}}>
      <div className={styles.filtertab} onClick={() => setIsExpandedsize(!isExpandedsize)}>
        <div className={styles.filtertitle}>Size</div>

        <ExpandMoreIcon  style={{color:'#3c5a1d', rotate: isExpandedsize?'':'-90deg',transition: 'all 0.8s ease'}}/>
      </div>
      <div className={styles.filteropts}>
        <div className={styles.filteropt} onClick={()=>{setsize((pr)=>{
          if(!pr.all){
            return {s37:false,s38:false,s39:false,s40:false,s41:false,s42:false, all:!pr.all}
          }else{
            return {...pr,all:!pr.all}
          }
        })}}>
          <input readOnly id='first' checked={size.all} type="checkbox" />
          <label >All</label>
        </div>
        <div className={styles.filteropt} onClick={()=>{setsize((pr)=>{
          return {...pr,s37:!pr.s37,all:false}
        })}}>
          <input readOnly id='sec' checked={size.s37} type="checkbox" />
          <label >37</label>
        </div>
        <div className={styles.filteropt} onClick={()=>{setsize((pr)=>{
          return {...pr,s38:!pr.s38,all:false}
        })}}>
          <input readOnly id='third' checked={size.s38} type="checkbox" />
          <label >38</label>  
        </div>
        <div className={styles.filteropt} onClick={()=>{setsize((pr)=>{
          return {...pr,s39:!pr.s39,all:false}
        })}}>
          <input readOnly id='fourth' checked={size.s39} type="checkbox" />
          <label >39</label>
        </div>
        <div className={styles.filteropt} onClick={()=>{setsize((pr)=>{
          return {...pr,s40:!pr.s40,all:false}
        })}}>
          <input readOnly id='fourth' checked={size.s40} type="checkbox" />
          <label >40</label>
        </div>
        <div className={styles.filteropt} onClick={()=>{setsize((pr)=>{
          return {...pr,s41:!pr.s41,all:false}
        })}}>
          <input readOnly id='fourth' checked={size.s41} type="checkbox" />
          <label >41</label>
        </div>
        <div className={styles.filteropt} onClick={()=>{setsize((pr)=>{
          return {...pr,s42:!pr.s42,all:false}
        })}}>
          <input readOnly id='fourth' checked={size.s42} type="checkbox" />
          <label >42</label>
        </div>
      </div>
  </div>




  <div className={styles.filtergroup } style={{maxHeight: isExpandedbrand?'3000px':'', overflow: 'hidden'}}>
      <div className={styles.filtertab} onClick={() => setIsExpandedbrand(!isExpandedbrand)}>
        <div className={styles.filtertitle}>Brand</div>

        <ExpandMoreIcon  style={{color:'#3c5a1d', rotate: isExpandedbrand?'':'-90deg',transition: 'all 0.8s ease'}}/>
      </div>
      <div className={styles.filteropts}>

        <div className={styles.filteropt} onClick={()=>{setbrand((pr)=>{
          if(!pr.all){
            return {adidas:false,puma:false,reebok:false,nike:false,converce:false,reebok:false, all:!pr.all}
          }else{
            return {...pr,all:!pr.all}
          }
        })}}>
          <input readOnly id='first' checked={brand.all} type="checkbox" />
          <label >All</label>
        </div>

        <div className={styles.filteropt} onClick={()=>{setbrand((pr)=>{
          return {...pr,adidas:!pr.adidas,all:false}
        })}}>
          <input readOnly id='first' checked={brand.adidas} type="checkbox" />
          <label >Adidas</label>
        </div>
        <div className={styles.filteropt} onClick={()=>{setbrand((pr)=>{
          return {...pr,nike:!pr.nike,all:false}
        })}}>
          <input readOnly id='sec' checked={brand.nike} type="checkbox" />
          <label >nike</label>
        </div>
        <div className={styles.filteropt} onClick={()=>{setbrand((pr)=>{
          return {...pr,puma:!pr.puma,all:false}
        })}}>
          <input readOnly id='third' checked={brand.puma} type="checkbox" />
          <label >Puma</label>  
        </div>
        <div className={styles.filteropt} onClick={()=>{setbrand((pr)=>{
          return {...pr,reebok:!pr.reebok,all:false}
        })}}>
          <input readOnly id='third' checked={brand.reebok} type="checkbox" />
          <label >Reebok</label>  
        </div>
        <div className={styles.filteropt} onClick={()=>{setbrand((pr)=>{
          return {...pr,converce:!pr.converce,all:false}
        })}}>
          <input readOnly id='fourth' checked={brand.converce} type="checkbox" />
          <label >Converce</label>
        </div>
      </div>
  </div>





  <div className={styles.filtergroup } style={{maxHeight: isExpandedprice?'3000px':'', overflow: 'hidden'}}>
      <div className={styles.filtertab} onClick={() => setIsExpandedprice(!isExpandedprice)}>
        <div className={styles.filtertitle}>Price</div>

        <ExpandMoreIcon  style={{color:'#3c5a1d', rotate: isExpandedprice?'':'-90deg',transition: 'all 0.8s ease'}}/>
      </div>
      <div className={styles.filteropts}>

        <div className={styles.filteropt} onClick={()=>{setprice((pr)=>{
          if(!pr.all){
            return {r1:false,r2:false,r3:false,r4:false, all:!pr.all}
          }else{
            return {...pr,all:!pr.all}
          }
        })}}>
          <input readOnly id='first' checked={price.all} type="checkbox" />
          <label >All</label>
        </div>

        <div className={styles.filteropt} onClick={()=>{setprice((pr)=>{
          return {...pr,r1:!pr.r1,all:false}
        })}}>
          <input readOnly id='first' checked={price.r1} type="checkbox" />
          <label >0 - 50$</label>
        </div>
        <div className={styles.filteropt} onClick={()=>{setprice((pr)=>{
          return {...pr,r2:!pr.r2,all:false}
        })}}>
          <input readOnly id='sec' checked={price.r2} type="checkbox" />
          <label >50$ - 100$</label>
        </div>
        <div className={styles.filteropt} onClick={()=>{setprice((pr)=>{
          return {...pr,r3:!pr.r3,all:false}
        })}}>
          <input readOnly id='third' checked={price.r3} type="checkbox" />
          <label >100$ - 200$</label>  
        </div>
        <div className={styles.filteropt} onClick={()=>{setprice((pr)=>{
          return {...pr,r4:!pr.r4,all:false}
        })}}>
          <input readOnly id='third' checked={price.r4} type="checkbox" />
          <label >200$+</label>  
        </div>
      </div>
  </div>




  <div className={styles.filtergroup } style={{maxHeight: isExpandedsort?'3000px':'', overflow: 'hidden'}}>
      <div className={styles.filtertab} onClick={() => setIsExpandedsort(!isExpandedsort)}>
        <div className={styles.filtertitle}>Sort By</div>

        <ExpandMoreIcon  style={{color:'#3c5a1d', rotate: isExpandedsort?'':'-90deg',transition: 'all 0.8s ease'}}/>
      </div>
      <div className={styles.filteropts}>
        <div className={styles.filteropt} onClick={()=>{setsort((pr)=>{
          return {low:false,high:false,latest:!pr.latest}
        })}}>
          <input readOnly id='sec' checked={sort.latest} type="checkbox" />
          <label >Latest</label>
        </div>
        <div className={styles.filteropt} onClick={()=>{setsort((pr)=>{
          return {high:false,latest:false,low:!pr.low}
        })}}>
          <input readOnly id='third' checked={sort.low} type="checkbox" />
          <label >Price:   low to high</label>  
        </div>
        <div className={styles.filteropt} onClick={()=>{setsort((pr)=>{
          return {latest:false,low:false,high:!pr.high}
        })}}>
          <input readOnly id='fourth' checked={sort.high} type="checkbox" />
          <label >Price:    high to low</label>
        </div>
      </div>
  </div>















</div>


  <div className={styles.btncontainer}>
  <button type='button' onClick={applyfilter}>Apply</button>

  </div>


</div>

<div className={styles.productslist}>

<Productslist filterselect={filterselect}/>

</div>
</div>


    )


}