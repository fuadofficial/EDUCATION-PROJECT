import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo.png'

function Header() {
    const nav_title = [
        { path: '/', display: 'Home' },
        { path: '/', display: 'Services' },
        { path: '/', display: 'Courses' },
        { path: '/', display: 'About Us' }
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
                                <li className='nav_item' key={index}>{item.display}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
