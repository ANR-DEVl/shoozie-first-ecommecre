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

  const homesearch = searchparams.get('homesearch')  ||'';



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


//categories


const categoriesList = ['casual', 'sport', 'classic', 'classy', 'formal'];

const [categories, setCategories] = useState({
  all: true,
  selected: []
});

const toggleAllCategories = () => {
  setCategories({
    all: true,
    selected: []
  });
};

const toggleCategory = (value) => {
  setCategories((prev) => {
    const exists = prev.selected.includes(value);

    const newSelected = exists
      ? prev.selected.filter((c) => c !== value)
      : [...prev.selected, value];

    return {
      all: newSelected.length === 0,
      selected: newSelected
    };
  });
};


//size
const sizesList = [36,37,38,39,40,41,42,43,44,45];

const [size, setSize] = useState({
  all: true,
  selected: []
});

const toggleAll = () => {
  setSize((prev) => ({
    all: !prev.all,
    selected: []
  }));
};

const toggleSize = (value) => {
  setSize((prev) => {
    const exists = prev.selected.includes(value);

    return {
      all: false,
      selected: exists
        ? prev.selected.filter((s) => s !== value)
        : [...prev.selected, value]
    };
  });
};


//brand
const brandsList = ['adidas', 'nike', 'puma', 'reebok', 'newBalance'];


const [brand, setBrand] = useState({
  all: true,
  selected: []
});
const toggleAllBrands = () => {
  setBrand({
    all: true,
    selected: []
  });
};

const toggleBrand = (value) => {
  setBrand((prev) => {
    const exists = prev.selected.includes(value);

    const newSelected = exists
      ? prev.selected.filter((b) => b !== value)
      : [...prev.selected, value];

    return {
      all: newSelected.length === 0, // لو ولا واحد مختار نرجع All
      selected: newSelected
    };
  });
};



//price
const priceRanges = [
  { id: '0-50', label: '0 - 50$', min: 0, max: 50 },
  { id: '50-100', label: '50$ - 100$', min: 50, max: 100 },
  { id: '100-200', label: '100$ - 200$', min: 100, max: 200 },
  { id: '200+', label: '200$+', min: 200, max: Infinity }
];
const [price, setPrice] = useState({
  all: true,
  selected: []
});

const toggleAllPrices = () => {
  setPrice({
    all: true,
    selected: []
  });
};

const togglePrice = (value) => {
  setPrice((prev) => {
    const exists = prev.selected.includes(value);

    const newSelected = exists
      ? prev.selected.filter((p) => p !== value)
      : [...prev.selected, value];

    return {
      all: newSelected.length === 0,
      selected: newSelected
    };
  });
};


//sort

const sortOptions = [
  { id: 'latest', label: 'Latest' },
  { id: 'low', label: 'Price: low to high' },
  { id: 'high', label: 'Price: high to low' },
  { id: 'popular', label: 'Top Sellers' }
];

const [sort, setSort] = useState('latest');




    const [filterselect,setfilterselect] = useState({
      categories:['all'],
      pricerange: ['all'],
      brand : ['all'],
      size:['all'],
      searchtxt : ''
    })





    function applyfilter(mysearch){

      // if(type==='home'){
      // if(homesearch){
      //   console.log('+++++++++++++++++')
      //   setsearch(homesearch)
      // }
      // }



      let selectedcategories = categories.all ? ['all'] : categories.selected;

      selectedcategories.length ===0? selectedcategories= ['all']:'';


      let selectedbrand = brand.all ? ['all'] : brand.selected;

      selectedbrand.length ===0? selectedbrand= ['all']:'';


      let selectedsize = size.all ? ['all']: size.selected

      selectedsize.length ===0? selectedsize= ['all']:'';


  let selectedprice = price.all ? ['all'] : price.selected;


      selectedprice.length ===0? selectedprice= ['all']:'';



      console.log('=======================')
      setfilterselect({
        categories : selectedcategories,
        pricerange : selectedprice,
        brand :selectedbrand,
        size :selectedsize,
        searchtxt: mysearch.toLowerCase(),
      })
    }

    // useEffect(()=>{
    //         setfilterselect((pr)=>{
    //           return {...pr,searchtxt:homesearch??search}
    // })

    // },[homesearch])


    useEffect(()=>{
      setsearch(homesearch)
      applyfilter(homesearch)
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

  {/* ALL */}
  <div className={styles.filteropt} onClick={toggleAllCategories}>
    <input readOnly checked={categories.all} type="checkbox" />
    <label>All</label>
  </div>

  {/* CATEGORIES */}
  {categoriesList.map((c) => (
    <div
      key={c}
      className={styles.filteropt}
      onClick={() => toggleCategory(c)}
    >
      <input
        readOnly
        checked={categories.selected.includes(c)}
        type="checkbox"
      />
      <label>{c}</label>
    </div>
  ))}

</div>
  </div>




  <div className={styles.filtergroup } style={{maxHeight: isExpandedsize?'3000px':'', overflow: 'hidden'}}>
      <div className={styles.filtertab} onClick={() => setIsExpandedsize(!isExpandedsize)}>
        <div className={styles.filtertitle}>Size</div>

        <ExpandMoreIcon  style={{color:'#3c5a1d', rotate: isExpandedsize?'':'-90deg',transition: 'all 0.8s ease'}}/>
      </div>
<div className={styles.filteropts}>

  {/* ALL */}
  <div className={styles.filteropt} onClick={toggleAll}>
    <input readOnly checked={size.all} type="checkbox" />
    <label>All</label>
  </div>

  {/* SIZES */}
  {sizesList.map((s) => (
    <div
      key={s}
      className={styles.filteropt}
      onClick={() => toggleSize(s)}
    >
      <input
        readOnly
        checked={size.selected.includes(s)}
        type="checkbox"
      />
      <label>{s}</label>
    </div>
  ))}

</div>
  </div>




  <div className={styles.filtergroup } style={{maxHeight: isExpandedbrand?'3000px':'', overflow: 'hidden'}}>
      <div className={styles.filtertab} onClick={() => setIsExpandedbrand(!isExpandedbrand)}>
        <div className={styles.filtertitle}>Brand</div>

        <ExpandMoreIcon  style={{color:'#3c5a1d', rotate: isExpandedbrand?'':'-90deg',transition: 'all 0.8s ease'}}/>
      </div>
<div className={styles.filteropts}>

  {/* ALL */}
  <div className={styles.filteropt} onClick={toggleAllBrands}>
    <input readOnly checked={brand.all} type="checkbox" />
    <label>All</label>
  </div>

  {/* BRANDS */}
  {brandsList.map((b) => (
    <div
      key={b}
      className={styles.filteropt}
      onClick={() => toggleBrand(b)}
    >
      <input
        readOnly
        checked={brand.selected.includes(b)}
        type="checkbox"
      />
      <label>{b}</label>
    </div>
  ))}

</div>
  </div>





  <div className={styles.filtergroup } style={{maxHeight: isExpandedprice?'3000px':'', overflow: 'hidden'}}>
      <div className={styles.filtertab} onClick={() => setIsExpandedprice(!isExpandedprice)}>
        <div className={styles.filtertitle}>Price</div>

        <ExpandMoreIcon  style={{color:'#3c5a1d', rotate: isExpandedprice?'':'-90deg',transition: 'all 0.8s ease'}}/>
      </div>
<div className={styles.filteropts}>

  {/* ALL */}
  <div className={styles.filteropt} onClick={toggleAllPrices}>
    <input readOnly checked={price.all} type="checkbox" />
    <label>All</label>
  </div>

  {/* PRICE RANGES */}
  {priceRanges.map((p) => (
    <div
      key={p.id}
      className={styles.filteropt}
      onClick={() => togglePrice(p.id)}
    >
      <input
        readOnly
        checked={price.selected.includes(p.id)}
        type="checkbox"
      />
      <label>{p.label}</label>
    </div>
  ))}

</div>
  </div>




  <div className={styles.filtergroup } style={{maxHeight: isExpandedsort?'3000px':'', overflow: 'hidden'}}>
      <div className={styles.filtertab} onClick={() => setIsExpandedsort(!isExpandedsort)}>
        <div className={styles.filtertitle}>Sort By</div>

        <ExpandMoreIcon  style={{color:'#3c5a1d', rotate: isExpandedsort?'':'-90deg',transition: 'all 0.8s ease'}}/>
      </div>
<div className={styles.filteropts}>
  {sortOptions.map((s) => (
    <div
      key={s.id}
      className={styles.filteropt}
      onClick={() => setSort(s.id)}
    >
      <input
        readOnly
        checked={sort === s.id}
        type="checkbox"
      />
      <label>{s.label}</label>
    </div>
  ))}
</div>
  </div>



</div>


  <div className={styles.btncontainer}>
  <button type='button' onClick={()=>{applyfilter(search)}}>Apply</button>

  </div>


</div>



<Productslist filterselect={filterselect} sort={sort}/>


</div>


    )


}