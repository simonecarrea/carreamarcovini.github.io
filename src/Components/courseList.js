
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/courseList.scss';
import lente from '../assets/loghi/lente.jpeg';
import macchina from '../assets/loghi/macchina-eon.png';
import lampadina from '../assets/loghi/lampadina_2.jpeg';
import CourseItem from '../Components/courseItem';
import { useNavigate } from 'react-router-dom';
import { FiArrowRightCircle } from "react-icons/fi";


const courses = [
  {
    id: 1,
    title: 'La tua impronta',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    imageUrl: lente,
    imageDetail: macchina,
    category: 'La nostra azienda'
  },
  {
    id: 2,
    title: 'Corso 2',
    description: 'Descrizione del Corso 2.',
    imageUrl: lente,
    category: 'La nostra azienda'
  },
  {
    id: 3,
    title: 'Corso 3',
    description: 'Descrizione del Corso 3.',
    imageUrl: lente,
    category: 'La nostra azienda'
  },
  {
    id: 4,
    title: 'Corso 4',
    description: 'Descrizione del Corso 4.',
    imageUrl: lente,
    category: 'La nostra azienda'
  },
  {
    id: 5,
    title: 'Corso 5',
    description: 'Descrizione del Corso 5.',
    imageUrl: lente,
    category: 'La nostra azienda'
  },
  {
    id: 6,
    title: 'Corso 6',
    description: 'Descrizione del Corso 6.',
    imageUrl: lente,
    category: 'La nostra azienda'
  },
  {
    id: 7,
    title: 'Corso 7',
    description: 'Descrizione del Corso 7.',
    imageUrl: lente,
    category: 'La nostra azienda'
  },
  {
    id: 8,
    title: 'Corso 8',
    description: 'Descrizione del Corso 8.',
    imageUrl: lente,
  },
  {
    id: 9,
    title: 'Corso 9',
    description: 'Descrizione del Corso 9.',
    imageUrl: lente,
    category: 'La nostra azienda'
  },
  {
    id: 10,
    title: 'Corso 10',
    description: 'Descrizione del Corso 10.',
    imageUrl: lente,
    category: 'La nostra azienda'
  },
  {
    id: 11,
    title: 'Corso 11',
    description: 'Descrizione del Corso 11.',
    imageUrl: lente,
    category: 'La nostra azienda'
  },
  {
    id: 12,
    title: 'Corso 12',
    description: 'Descrizione del Corso 12.',
    imageUrl: lente,
    category: 'La nostra azienda'
  }
];
const courses2 = [
  {
    id: 1,
    title: 'Corso 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    imageUrl: lampadina,
    imageDetail: macchina,
    category: 'La nostra azienda'
  },
  {
    id: 2,
    title: 'Corso 2',
    description: 'Descrizione del Corso 2.',
    imageUrl: lampadina,
    category: 'La nostra azienda'
  },
  {
    id: 3,
    title: 'Corso 3',
    description: 'Descrizione del Corso 3.',
    imageUrl: lampadina,
    category: 'La nostra azienda'
  },
  {
    id: 4,
    title: 'Corso 4',
    description: 'Descrizione del Corso 4.',
    imageUrl: lampadina,
    category: 'La nostra azienda'
  },
  {
    id: 5,
    title: 'Corso 5',
    description: 'Descrizione del Corso 5.',
    imageUrl: lampadina,
    category: 'La nostra azienda'
  },
  {
    id: 6,
    title: 'Corso 6',
    description: 'Descrizione del Corso 6.',
    imageUrl: lampadina,
    category: 'La nostra azienda'
  },
  {
    id: 7,
    title: 'Corso 7',
    description: 'Descrizione del Corso 7.',
    imageUrl: lampadina,
    category: 'La nostra azienda'
  },
  {
    id: 8,
    title: 'Corso 8',
    description: 'Descrizione del Corso 8.',
    imageUrl: lampadina,
  },
  {
    id: 9,
    title: 'Corso 9',
    description: 'Descrizione del Corso 9.',
    imageUrl: lampadina,
    category: 'La nostra azienda'
  },
  {
    id: 10,
    title: 'Corso 10',
    description: 'Descrizione del Corso 10.',
    imageUrl: lampadina,
    category: 'La nostra azienda'
  },
  {
    id: 11,
    title: 'Corso 11',
    description: 'Descrizione del Corso 11.',
    imageUrl: lampadina,
    category: 'La nostra azienda'
  },
  {
    id: 12,
    title: 'Corso 12',
    description: 'Descrizione del Corso 12.',
    imageUrl: lampadina,
    category: 'La nostra azienda'
  }
];

const CourseList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCourseList, setSelectedCourseList] = useState(null);

  const handleCourseClick = (course) => {
    // Qui puoi fare qualsiasi azione con i dati del corso
    // Ad esempio, puoi navigare alla pagina di dettaglio del corso
    setSelectedCourse(course);
    console.log('Corso selezionato:', course);
  };

  const handleCourseListClick = (courses) => {
    setSelectedCourseList(courses);
    const category = courses[0].category;
    navigate(`/catalog/${category}`, { state: { selectedCourseList: courses } });
    console.log('Corso selezionato:', selectedCourseList, courses);
  };
  
  


  return (


    <div className="netflix-carousel-container">
      <div className='category-title'>
        <p>Nome categoria Corso </p> 
        <FiArrowRightCircle className='icon-arrow' onClick={() => handleCourseListClick(courses)} />
      </div>
      <Slider {...settings}>
        {courses2.map(course => (
          <div key={course.id}>
            <CourseItem key={course.id} course={course} onCourseClick={handleCourseClick} />
          </div>
        ))}
      </Slider>

      <div className='category-title'>
        <p>Nome categoria Corso</p>
        <FiArrowRightCircle className='icon-arrow' onClick={() => handleCourseListClick(courses)} />
      </div>
      <Slider {...settings}>
        {courses.map(course => (
          <div key={course.id}>
            <CourseItem key={course.id} course={course} onCourseClick={handleCourseClick} />
          </div>
        ))}
      </Slider>

      <div className='category-title'>
        <p>Nome categoria Corso</p>
        <FiArrowRightCircle className='icon-arrow' onClick={() => handleCourseListClick(courses)} />
      </div>
      <Slider {...settings}>
        {courses.map(course => (
          <div key={course.id}>
            <CourseItem key={course.id} course={course} onCourseClick={handleCourseClick} />
          </div>
        ))}
      </Slider>

      <div className='category-title'>
        <p>Nome categoria Corso</p>
        <FiArrowRightCircle className='icon-arrow' onClick={() => handleCourseListClick(courses)} />
      </div>
      <Slider {...settings}>
        {courses.map(course => (
          <div key={course.id}>
            <CourseItem key={course.id} course={course} onCourseClick={handleCourseClick} />
          </div>
        ))}
      </Slider>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    courses: state.courses.courses,
  };
};

export default connect(mapStateToProps)(CourseList);


{/* <div key={course.id} className="netflix-carousel-item">
 <Link to={`/course/${course.id}`}>
  <img src={course.imageUrl} alt={course.title} className="netflix-carousel-image" />
  <div className="netflix-carousel-title">{course.title}</div>
</Link>
</div> */}