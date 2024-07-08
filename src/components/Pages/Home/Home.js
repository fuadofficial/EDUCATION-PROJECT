import React from 'react'
import './Home.css'
import meta from '../../../assets/img/meta.jpeg'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import Courses from '../Courses/Courses'

function Home() {
    const handleclick = () => {
        window.open('https://www.youtube.com/@techflixai')
    }
    const handleclickWatch = () => {
        window.open('https://www.youtube.com/watch?v=AcKEdVNGibA&t=2687s')
    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="home-container">
                        <div className="home-content">
                            <h2 className="section_title">Learn Everything For Free!</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus eaque repellendus  </p>
                            <div className="home-btns">
                                <button onClick={handleclick} className='register-btn'>Get Started</button>
                                <button onClick={handleclickWatch} className='register-btn'>Watch Now!</button>
                            </div>
                        </div>
                        <div className="home-img">
                            <div className="home-img-wrapper">
                                <div className="box-01">
                                    <div className="box-img">
                                        <img src={meta} alt="" />
                                    </div>
                                    <div className="whatsapp-container">
                                        <h5>500 + students</h5>
                                        <AiOutlineWhatsApp color='green' />
                                    </div>
                                    <div className="support">
                                        <h5>active support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Courses />
        </>

    )
}

export default Home