
import Button from '@mui/material/Button';


import Link from 'next/link';

import CategoriesSection from './CategoriesSection';
import TrustSection from './TrustSection';
import FeaturedProducts from './FeaturedProducts';

export default function Content(){




    return (
        <div className='homeContent'>

            <CategoriesSection />
            <FeaturedProducts />
            <TrustSection />
        </div>
    )
}