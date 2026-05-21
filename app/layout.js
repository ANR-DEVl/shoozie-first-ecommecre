import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Myfooter from "./components/Myfooter";

import Header from "./components/Header";

import { CartProvider } from './context/cartContext';
import { AuthProvider } from './context/authContext'


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


}   , openGraph: {
        title: 'Shoozie - Your Shoe Store',
        description: 'Discover premium shoes for every occasion',
        url: 'https://shoozie-store-ecommecre-pj67.vercel.app',
        siteName: 'Shoozie',
        type: 'website',
    },


    robots: {
        index: true,
        follow: true,
    },


    metadataBase: new URL('https://shoozie-store-ecommecre-pj67.vercel.app'),


};

export default function RootLayout({ children }) {





  return (
    <html lang="en">
      <body>
        <AuthProvider>
                  <Header/>
        <div style={{height:'70px'}}></div>

          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>

        
        <Myfooter/>

      </body>
    </html>
  );
}
