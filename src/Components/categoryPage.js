// CategoryPage.js
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CardCourse from './cardCourse';

const CategoryPage = ({ }) => {

    const location = useLocation();
    const { category } = useParams();

    // Accedi ai dati passati nella navigazione tramite lo stato
    const selectedCourseList = location.state ? location.state.selectedCourseList : null;

    console.log("category page", selectedCourseList);

    return (
        <div className="category-page">
            <h2> {selectedCourseList[0].category} </h2>
            <div className="card-grid">
                {selectedCourseList.map((course) => (
                    <CardCourse key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
