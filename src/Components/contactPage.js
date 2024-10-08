// ContactPage.js
import React, { useState } from 'react';
import '../css/contactPage.scss';
import { useNavigate } from 'react-router-dom';
import { FiArrowRightCircle } from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import GoogleMapComponent from '../Components/googleMap';



const ContactPage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
    };
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedCourseList, setSelectedCourseList] = useState(null);


    return (
        <div className="profile-container">
            <GoogleMapComponent />
            <div className='doveSiamo'></div>
            <div className='orari'>Orari</div>
            <span>Lunedì - Sabato 09.00 - 12.00 14.30 - 18.00 </span>

        </div>
    );
};

export default ContactPage;
