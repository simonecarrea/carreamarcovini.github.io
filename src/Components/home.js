import React, { useEffect, useState } from 'react';
import CourseList from '../Components/courseList';
import { useDispatch } from 'react-redux';
import { getCourses } from '../actions/courseActions';
import HeroBanner from './heroBanner';
import '../css/home.scss';
import gavi from '../assets/loghi/gavi.jpeg';
import firma from '../assets/loghi/firma.svg';
import { retrieveWineList } from '../services/wineService'; 


const Home = () => {

  const dispatch = useDispatch();
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    // Introduci un ritardo per far vedere meglio l'effetto
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Quando il componente viene creato, dispaccia l'azione per ottenere i corsi
    dispatch(getCourses());
  }, [dispatch]);



  useEffect(() => {
    // Richiama retrieveWineList e stampa i risultati
    const fetchWines = async () => {
      const wineList = await retrieveWineList();
      console.log('Wine List:', wineList); // Visualizza i dati nel console log
    };

    fetchWines();
  }, []);

  return (
    <div>
      <div className='home-container'>
        <div className="background-image"></div>
        {showImage && <div className='title'>
          <img src={firma} altText="Firma Marco Carrea" ></img>
        </div>}
      </div>
      <div className='content'>

      </div>
    </div>
  );
};

export default Home;
