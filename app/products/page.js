'use client';



import dynamic from 'next/dynamic';
import { Suspense } from 'react';


const Productswraper = dynamic(() => import('../components/Productswraper'), {
  ssr: false 
});

// import Productswraper from "../components/Productswraper";



export default function ProductsPage() {


  return(
        <Suspense fallback={<div>Loading products...</div>}>
      <Productswraper />
    </Suspense>

  )



}