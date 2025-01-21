// src/components/HeroBanner.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/heroBanner.scss';
import pannello from '../assets/loghi/eon-pannello.jpeg';
import supersolar from '../assets/loghi/supersolar.png';
import casa from '../assets/loghi/eon_energia_casa.png';
import impronta from '../assets/loghi/impronta.jpeg';
import sede from '../assets/loghi/sede.jpeg';
import { Link } from 'react-router-dom';


const slides = [
  {
    id: 1,
    imageUrl: impronta,
    caption: 'Slide 1',
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/1200x400?text=Slide+1",
    caption: 'Slide 2',
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/1200x400?text=Slide+1",
    caption: 'Slide 3',
  },
];

const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="slick-slider">
      {slides.map(slide => (
        <div key={slide.id}>
            <Link to={`/course/${slide.id}`} >
              <img className='hero-img' src={slide.imageUrl} alt={slide.caption} />
            </Link>
        </div>
      ))}
    </Slider>
  );
};

export default HeroBanner;
