// Componente del Carosello

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/courseItem.scss';

const CourseItem = ({ course, onCourseClick }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        // Chiamare la funzione onCourseClick e passare i dati del corso
        
        console.log("handleCourseClick", course);
        navigate(`/course/${course.id}`, { state: { course } });
        onCourseClick({
            id: course.id,
            title: course.title,
            description: course.description,
            imageUrl: course.imageUrl,
            caregory: course.caregory,
        });
    };


    return (
       
        <div key={course.id} className="netflix-carousel-item" onClick={handleClick}>
            <div className="card-overlay">
                <img className="netflix-carousel-image" src={course.imageUrl} alt={course.title} />
                <div className="netflix-carousel-title">
                    <h3>{course.title}</h3>
                </div>
            </div>
        </div>


    );
};

export default CourseItem;

