// components/TrustSection.js
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import CachedIcon from '@mui/icons-material/Cached';
import LockIcon from '@mui/icons-material/Lock';

const trustItems = [
    { icon: <LocalShippingIcon />, title: 'Fast delivery', desc: 'Get your order in 2-3 days' },
    { icon: <StarIcon />, title: 'Top quality', desc: 'Premium materials guaranteed' },
    { icon: <CachedIcon />, title: 'Easy returns', desc: '30-day return policy' },
    { icon: <LockIcon />, title: 'Secure payment', desc: '100% safe transactions' },
]

export default function TrustSection() {
    return (
        <div className="trustSection">
            {trustItems.map((item) => (
                <div key={item.title} className="trustCard">
                    <div className="trustIcon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    )
}