'use client';
import styles from "../post/mainproduct.module.css";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";


export default function Imageselector({ img }) {

    const [selectedimg, setselectedimg] = useState('4');
    const [selectedcolor, setselectedcolor] = useState("black");



    function switchbig(e) {

    const num = e.currentTarget.getAttribute("data-num");
        setselectedimg(num);
    }

    function cswitch(e) {
        console.log(e.currentTarget.getAttribute("data-color"));

        setselectedcolor(e.currentTarget.getAttribute("data-color"));

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
                            <div className={'1' ==selectedimg?styles.selectedimg :''} data-num={'1'} onClick={switchbig}><img src={`/photos/${img}1.jpg`} alt="" /></div>
                            <div className={'2' ==selectedimg?styles.selectedimg :''} data-num={'2'} onClick={switchbig}><img src={`/photos/${img}2.jpg`} alt="" /></div>
                            <div className={'3' ==selectedimg?styles.selectedimg :''} data-num={'3'} onClick={switchbig}><img src={`/photos/${img}3.jpg`} alt="" /></div>
                            <div className={'4' ==selectedimg?styles.selectedimg :''} data-num={'4'} onClick={switchbig}><img src={`/photos/${img}4.jpg`} alt="" /></div>


                        </div>
                        <div className={styles.bigimg}>
                            <div className={styles.bic}>
                                <img src={`/photos/${img}${selectedimg}.jpg`} alt="" />
                                <div className={styles.switchcase}>
                                    <div className={styles.leftswitch} >
                                        <ArrowBackIosIcon onClick={previous} style={{fontSize:'60px',marginLeft:'18px',  color: '#60646ea6'}}/>
                                    </div>
                                    <div className={styles.rightswitch} >
                                    <ArrowForwardIosIcon onClick={forward} style={{fontSize:'60px',marginRight:'8px',  color: '#60646ea6'}}/>
                            </div>
                        </div>
                            </div>
                            <p>Color :</p>
                            <div className={styles.colorswitch}>
                                <div data-color={'black'} onClick={cswitch}  className={`${styles.colorbox} ${selectedcolor=='black'?styles.selectedcolor:''}`} style={{ backgroundColor: "black" }}></div>
                                <div data-color={'red'} onClick={cswitch} className={`${styles.colorbox} ${selectedcolor=='red'?styles.selectedcolor:''}`} style={{ backgroundColor: "red" }}></div>
                                <div data-color={'blue'} onClick={cswitch} className={`${styles.colorbox} ${selectedcolor=='blue'?styles.selectedcolor:''}`} style={{ backgroundColor: "blue" }}></div>
                                <div data-color={'green'} onClick={cswitch} className={`${styles.colorbox} ${selectedcolor=='green'?styles.selectedcolor:''}`} style={{ backgroundColor: "green" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}



