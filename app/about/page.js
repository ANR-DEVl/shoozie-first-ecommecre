


import styles from './about.module.css'
import Link from 'next/link'
import ShieldIcon from '@mui/icons-material/Shield'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <HeroSection />
            <StorySection />
            <ValuesSection />
            <TeamSection />
            <CTASection />
        </div>
    )
}

function HeroSection() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroLeft}>
                <span className={styles.tag}>About us</span>
                <h3 className={styles.heroTitle}>
                    We are <span>Shoozie</span>,<br />
                    your shoe destination
                </h3>
                <p className={styles.heroDesc}>
                    A university project from the Electronics Department — Blida 1 University. Shoozie is a full-stack e-commerce platform that demonstrates real-world web development integrated with embedded systems.
                </p>
            </div>
            <div className={styles.statsGrid}>
                {[
                    { num: '500+', label: 'Products' },
                    { num: '10k+', label: 'Happy customers' },
                    { num: '2026', label: 'Project year' },
                    { num: 'B12', label: 'Group' },
                ].map((stat) => (
                    <div key={stat.label} className={styles.statCard}>
                        <p className={styles.statNum}>{stat.num}</p>
                        <p className={styles.statLabel}>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function StorySection() {
    return (
        <div className={styles.story}>
            <img src="/photos/adidas1.jpg" alt="our story" className={styles.storyImg} />
            <div className={styles.storyText}>
                <h2 className={styles.sectionTitle}>Our story</h2>
                <p>Shoozie was developed as a 3rd-year Electronics engineering project at Université de Blida 1. The idea was to bridge the gap between web development and embedded systems — building a complete e-commerce platform that communicates with an ESP32 microcontroller.</p>
                <p>When an order is placed on the platform, the order data is sent via API to an ESP32 device, which processes and displays the order list in real time. A real demonstration of full-stack development meeting hardware.</p>
            </div>
        </div>
    )
}

function ValuesSection() {
    const values = [
        { icon: <ShieldIcon />, title: 'Quality first', desc: 'Every product goes through strict quality checks before reaching your door.' },
        { icon: <FavoriteIcon />, title: 'Customer love', desc: 'Our customers are at the heart of everything we do.' },
        { icon: <LocalShippingIcon />, title: 'Fast delivery', desc: 'We cover all 48 wilayas across Algeria with reliable delivery.' },
    ]
    return (
        <div className={styles.values}>
            <h2 className={styles.sectionTitle}>Our values</h2>
            <div className={styles.valuesGrid}>
                {values.map((v) => (
                    <div key={v.title} className={styles.valueCard}>
                        <div className={styles.valueIcon}>{v.icon}</div>
                        <p className={styles.valueTitle}>{v.title}</p>
                        <p className={styles.valueDesc}>{v.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function TeamSection() {
    const team = [
        { initial: 'A', name: 'Nabti Anouar', role: 'Founder & Developer', desc: 'Built Shoozie from the ground up with a passion for both fashion and technology.' },

    ]
    return (
        <div className={styles.team}>
            <h2 className={styles.sectionTitle}>Meet the team</h2>
            <div className={styles.teamGrid}>
                {team.map((member) => (
                    <div key={member.name} className={styles.teamCard}>
                        <div className={styles.teamAvatar}><img style={{width:'100%',height:'100%'}} src="/photos/me.jpg" alt="" /></div>
                        <p className={styles.teamName}>{member.name}</p>
                        <p className={styles.teamRole}>{member.role}</p>
                        <p className={styles.teamDesc}>{member.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function CTASection() {
    return (
        <div className={styles.cta}>
            <h3>Ready to find your perfect pair?</h3>
            <p>Explore our latest collection and step into style today.</p>
            <Link href="/products">
                <button className={styles.ctaBtn}>Shop now</button>
            </Link>
        </div>
    )
}