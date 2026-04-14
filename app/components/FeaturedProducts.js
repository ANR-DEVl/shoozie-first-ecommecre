

import TopSellers from "./TopSellers"
import Resently from "./Resently"

export default function FeaturedProducts() {
    return (
        <div className="featuredProducts">
            <TopSellers />
            <Resently/>
        </div>
    )
}