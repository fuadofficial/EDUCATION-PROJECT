import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Pages/Home/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Plans from '../components/Pages/Plans/Plans';
import Courses from '../components/Pages/Courses/Courses';
import AboutUs from '../components/Pages/AboutUs/AboutUs';
import ContactUs from '../components/Pages/ContactUs/ContactUs';
import SupportUs from '../components/Pages/SupportUs/SupportUs';

function LayoutRoutes() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/services' element={<Plans />} />
                    <Route path='/courses' element={<Courses />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/contact' element={<ContactUs />} />
                    <Route path='/support' element={<SupportUs/>} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default LayoutRoutes;
