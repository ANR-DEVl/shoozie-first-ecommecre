import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mainpage">
          <div className="maincontent" >
      <div className="mainarticle">

          <h1>Shoozie</h1>

        <p>This Shoes Brand will open your sight toward a new direction of fashion given by major Artist makers in the field.</p>
        <p className="ques">
          Why don't you Dive and Discover Your new self?
        </p>
        <div className="btncont">
          <Link href="/products" className="explore">Explore Now</Link>
        </div>

      </div>

      <div className="slidercontainer">
        <Slider/>
      </div>
    </div>

    <Content/>
    </div>

  );
}
