

'use client'

import { useState } from 'react'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import InfoIcon from '@mui/icons-material/Info'

export default function MobileMenu() {

    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    const links = [
        { href: '/', label: 'Home', icon: <HomeIcon /> },
        { href: '/products', label: 'Search', icon: <SearchIcon /> },
        { href: '/account', label: 'Account', icon: <PersonIcon /> },
        { href: '/about', label: 'About', icon: <InfoIcon /> },
    ]

    return (
        <>
            {/* Menu Button */}
            <button
                className={`menuBtn ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div className='overlay' onClick={toggleMenu} />
            )}

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'sidebarOpen' : ''}`}>
                <div className={'sidebarHeader'}>
                    <p>Welcome to</p>
                    <h3>Shoozie Store</h3>
                </div>

                <div  className={'navLinks navy'}>
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={'navLink'}
                            onClick={toggleMenu}
                        >
                            <div className={'linkIcon'}>{link.icon}</div>
                            {link.label}
                            <div className={'linkIndicator'}></div>
                        </Link>
                    ))}
                </div>

                <div className={'sidebarFooter'}>
                    <p>© 2025 Shoozie Store</p>
                </div>
            </div>
        </>
    )
}