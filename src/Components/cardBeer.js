import React from 'react';
import '../css/cardCourse.scss';
import { useNavigate } from 'react-router-dom';

const CardBeer = ({ birra, onBeerClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
      // Chiamare la funzione onCourseClick e passare i dati del corso
      
      console.log("handleCourseClick", birra);
      navigate(`/birra/${birra.nomeBirra}`, { state: { birra } });
      onBeerClick({
          id: birra.id,
          title: birra.title,
          description: birra.description,
          imageUrl: birra.imageUrl,
          caregory: birra.caregory,
      });
  };
  return (
    <div className="card" onClick={handleClick}>
      <div className="card-image">
        <img src={birra.immagineBirra?.fields.file.url} alt={birra.nomeBirra} />
      </div>
      <div className="card-content">
        <h2>{birra.nomeBirra}</h2>
        <h3>{birra.produttore}</h3>
      </div>
    </div>
  );
};

export default CardBeer;
