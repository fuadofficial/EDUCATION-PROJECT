import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
import { Link } from 'react-router-dom'

function Footer() {
    const handle = () => {
        window.scrollTo(0, 0)
    }
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer-box">
                        <div className="logo">
                            <div className="logo-img">
                                <img src={footer} alt="" />
                            </div>
                            <h2>Techflix AI</h2>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="footer-box">
                        <h4 className='footer_title'>Company</h4>
                        <ul className='footer_links'>
                            <li onClick={handle}><Link to='/courses'>Our Programs</Link></li>
                            <li onClick={handle}><Link to='/services'>Our Plan</Link></li>
                            <li onClick={handle}><Link to='/contact'>Become a number</Link></li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h4 className='footer_title'>Quick Links</h4>
                        <ul className='footer_links'>
                            <li onClick={handle}><Link to='/about'>About Us</Link></li>
                            <li onClick={handle}><Link to='/contact'>Contact Us</Link></li>
                            <li onClick={handle}><Link to='/support'>Support Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer