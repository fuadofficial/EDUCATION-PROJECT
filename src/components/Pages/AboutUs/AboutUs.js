import React from 'react'
import './AboutUs.css'
import miya from '../../../assets/img/miya.jpg'

function AboutUs() {
    return (
        <div className='container'>
            <div className="about-us-container">
                <div className="team-members">
                    <h2>Our Team</h2>
                    <div className="member-card">
                        <img className='member-image' src={miya} alt="" />
                        <h3 className='member-name'>Miya Helinski</h3>
                        <p className='member-role'>Co-Founder</p>
                    </div>
                </div>
                <div className="about-us-description">
                    <h1 className='about-us-heading'>About Us</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos error, vitae, deserunt recusandae praesentium ratione consectetur omnis excepturi id ea corporis. Facilis quod omnis numquam quae odio quasi dolorum inventore!
                        Id, nemo ipsum et voluptatibus quam dignissimos facere maiores mollitia quidem. Esse ipsam facilis dolorem necessitatibus fugit eaque asperiores autem quo nam quae iure repellendus neque, blanditiis, dolor dolore officia.
                        Dolor quia minima adipisci accusantium quisquam excepturi nostrum ipsa accusamus, veritatis nihil illum repellat rem voluptatem, sapiente expedita deleniti facilis porro nulla error dolorum ut. Et voluptate incidunt deserunt laboriosam?</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs