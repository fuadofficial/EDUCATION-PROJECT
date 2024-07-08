import React from 'react'
import './Community.css'
import community from '../../../assets/img/tc.png'

function Community() {
    const handleClick = () => {
        window.open('https://www.youtube.com/watch?v=AcKEdVNGibA&t=5155s')
    }
    return (
        <div className="container">
            <div className="start-wrapper">
                <div className="start-img">
                    <img src={community} alt="" />
                </div>
                <div className="start-content">
                    <h2>Join Our Free Tech Community</h2>
                    <p>Unlock the power of Knowledge and innovation by joining our vibrant and free whatsApp tech community</p>
                    <button className='register-btn' onClick={handleClick}>Join Now</button>
                </div>
            </div>
        </div>
    )
}

export default Community