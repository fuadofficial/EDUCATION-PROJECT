import React from 'react'
import './Courses.css'
import ai from '../../../assets/img/ai.png'
import dg from '../../../assets/img/dg.png'
import sd from '../../../assets/img/sd.png'
import hacking from '../../../assets/img/hacking.png'

function Courses() {
    const courseData = [
        {
            title: "AI DEVELOPMENT",
            desc: 'Master Ai Development!!!',
            img: ai
        },
        {
            title: "SOFTWARE DEVELOPMENT",
            desc: 'Master Software Development!',
            img: sd
        },
        {
            title: "DIGITAL MARCKETING",
            desc: 'Master Digital Marcheting!!!',
            img: dg
        },
        {
            title: "CYBER SECURITY",
            desc: 'Master Cyber Security!!',
            img: hacking
        },
    ]
    return (
        <div className="container course-container">
            <div className="course-top">
                <h2 className='section_title'>Our Free Courses</h2>
                <p>The Top Training Education's Website</p>
                <div className="course-wrapper">
                    {
                        courseData.map((item, index) => {
                            return (
                                <div className="course-item" key={index}>
                                    <span className='course-icon'>
                                        <img src={item.img} alt="" />
                                    </span>
                                    <div className="course-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Courses