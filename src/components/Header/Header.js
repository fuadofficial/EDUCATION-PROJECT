import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    const nav_title = [
        { path: '/', display: 'Home' },
        { path: '/services', display: 'Services' },
        { path: '/courses', display: 'Courses' },
        { path: '/about', display: 'About Us' }
    ]
    return (
        <header className='header'>
            <div className="container">
                <div className="nav_container">
                    <div className="logo">
                        <div className="logo-img">
                            <img src={logo} alt="Techflix AI logo" />
                        </div>
                        <h2>Techflix AI</h2>
                    </div>
                    <div className="navigation">
                        <ul className='menu'>
                            {nav_title.map((item, index) => (
                                <li className='nav_item' key={index}><Link to={item.path}>{item.display}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
