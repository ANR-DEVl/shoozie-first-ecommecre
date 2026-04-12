'use client';
import styles from "../post/mainproduct.module.css";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";


export default function Imageselector({ img , sizeArray, sizeSwitch , selectedsize}) {


    // const sizeValues = sizeArray.map((e)=>{
    //     return e.value;
    // })
    // console.log(sizeValues)
    // console.log(sizeArray)


    // const [selectedsize, setselectedsize] = useState(sizeArray[0].value);


    const sizeOptions = sizeArray.map((e)=>{
        if(e.stock>0){
        return (
            <div className={`${styles.sizeOpt} ${e.value === selectedsize ? `${styles.selectedSizeCase}`:''}`} key={e.value} data-size={e.value} onClick={sizeSwitch}>
                <div className={styles.sizeValue}>{e.value}</div>
                <div className={styles.sizeStock}>stock: {e.stock}</div>
            </div>)
        }

    })




    //         function sizeSwitch(e) {
    //     console.log(e.currentTarget.getAttribute("data-size"));

    //     setselectedsize(e.currentTarget.getAttribute("data-size"));

    // }




    const [selectedimg, setselectedimg] = useState('1');
    // const [selectedcolor, setselectedcolor] = useState("black");






    // function cswitch(e) {
    //     console.log(e.currentTarget.getAttribute("data-color"));

    //     setselectedcolor(e.currentTarget.getAttribute("data-color"));

    // }








    //img browsing

    function switchbig(e) {

    const num = e.currentTarget.getAttribute("data-num");
        setselectedimg(num);
    }


    function previous() {
        setselectedimg((prev) => { 
            if (prev === '1') {
                return '4';
            } else {
                return (parseInt(prev) - 1).toString();
            }
        })
    }

    function forward() {
        setselectedimg((prev) => {  
            if (prev === '4') {
                return '1';
            } else {
                return (parseInt(prev) + 1).toString();
            }
        })}



    return (
                <div className={styles.imgselector}>
                    <div className={styles.imgflx}>
                        <div className={styles.smallimgs}>
                            <div className={'1' ==selectedimg?styles.selectedimg :''} data-num={'1'} onClick={switchbig}><img src={`/photos/${img[0].slice(0, -1)}1.jpg`} alt="" /></div>
                            <div className={'2' ==selectedimg?styles.selectedimg :''} data-num={'2'} onClick={switchbig}><img src={`/photos/${img[0].slice(0, -1)}2.jpg`} alt="" /></div>
                            <div className={'3' ==selectedimg?styles.selectedimg :''} data-num={'3'} onClick={switchbig}><img src={`/photos/${img[0].slice(0, -1)}3.jpg`} alt="" /></div>
                            <div className={'4' ==selectedimg?styles.selectedimg :''} data-num={'4'} onClick={switchbig}><img src={`/photos/${img[0].slice(0, -1)}4.jpg`} alt="" /></div>


                        </div>
                        <div className={styles.bigimg}>
                            <div className={styles.bic}>
                                <img src={`/photos/${img[0].slice(0, -1)}${selectedimg}.jpg`} alt="" />
                                <div className={styles.switchcase}>
                                    <div className={styles.leftswitch} >
                                        <ArrowBackIosIcon onClick={previous} style={{fontSize:'60px',marginLeft:'18px',  color: '#60646ea6'}}/>
                                    </div>
                                    <div className={styles.rightswitch} >
                                        <ArrowForwardIosIcon onClick={forward} style={{fontSize:'60px',marginRight:'8px',  color: '#60646ea6'}}/>
                                    </div>
                                </div>
                            </div>
                            <p style={{color:'black'}}>Sizes :</p>
                            {/* <div className={styles.colorswitch}>
                                <div data-color={'black'} onClick={cswitch}  className={`${styles.colorbox} ${selectedcolor=='black'?styles.selectedcolor:''}`} style={{ backgroundColor: "black" }}></div>
                                <div data-color={'red'} onClick={cswitch} className={`${styles.colorbox} ${selectedcolor=='red'?styles.selectedcolor:''}`} style={{ backgroundColor: "red" }}></div>
                                <div data-color={'blue'} onClick={cswitch} className={`${styles.colorbox} ${selectedcolor=='blue'?styles.selectedcolor:''}`} style={{ backgroundColor: "blue" }}></div>
                                <div data-color={'green'} onClick={cswitch} className={`${styles.colorbox} ${selectedcolor=='green'?styles.selectedcolor:''}`} style={{ backgroundColor: "green" }}></div>
                            </div> */}
                            <div className={styles.colorswitch}>
                                {sizeOptions}
                            </div>
                        </div>
                    </div>
                </div>
    )
}



