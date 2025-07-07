import styles from "../post/mainproduct.module.css";

export default function Overview(props) {
    return (
    <div className={styles.overview}>
        <h3>Overview</h3>
        <hr />
        <p>{props.disc}
 <br /> #Sneakers #RunningShoes #MenStyle #SportFashion #CasualWear #AirStrideX50 #BreathableShoes #LightweightSneakers #ComfortFit #EverydayShoes #Adidas #Nike</p>
        <h4>Highlights</h4>
        
        <p>
            ✔ Lightweight Design:
Engineered to reduce fatigue for all-day comfort. <br />

✔ Breathable Mesh Upper:
Keeps your feet dry and cool, even in hot weather. <br />

✔ Shock-Absorbing Sole:
Provides great cushioning for long walks or workouts.<br />

✔ Sleek & Modern Look:
Pairs perfectly with jeans, joggers, or sportswear.<br />

✔ Multiple Color Options:
Choose from bold shades like red, black, green, and blue.<br />

✔ Available Sizes:
From EU 38 to 45 (US 6 to 11.5).<br />

✔ Easy to Clean:
Wipe with a damp cloth to keep them looking fresh.<br /></p>
    </div>
    );
}
