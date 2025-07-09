import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Myfooter from "./components/Myfooter";

import Header from "./components/Header";


// import { ProductsProvider } from "./context/productList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {

  description: "this is a frontend project of an e-commerce store that sells shoes by diffrent sizes and categories",
    title: 'Shoozie',
    keywords :['shoozie','shoes','adidas','nike','converce','puma','shoe store','buy online','e-commerce','reebok','classic','boots','style','fashion','feet','sport shoes','buy shoes','shoes brands','women shoe','winter boots','casual'],
    icons: {
  icon: "/favicon.ico",
}


};

export default function RootLayout({ children }) {





  return (
    <html lang="en">
      <body>

                  <Header/>
        <div style={{height:'70px'}}></div>
        {children}
        <Myfooter/>

      </body>
    </html>
  );
}
