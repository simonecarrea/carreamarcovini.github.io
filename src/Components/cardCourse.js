import React from 'react';
import '../css/cardCourse.scss';
import { useNavigate } from 'react-router-dom';

const CardCourse = ({ vino, onWineClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
      // Chiamare la funzione onCourseClick e passare i dati del corso
      
      console.log("handleCourseClick", vino);
      navigate(`/vini/${vino.title}`, { state: { vino } });
      onWineClick({
          id: vino.id,
          title: vino.title,
          description: vino.description,
          imageUrl: vino.imageUrl,
          caregory: vino.caregory,
      });
  };
  return (
    <div className="card" onClick={handleClick}>
      <div className="card-image">
        <img src={vino.imageUrl} alt={vino.title} />
      </div>
      <div className="card-content">
        <h2>{vino.title}</h2>
        <h3>{vino.produttore}</h3>
      </div>
    </div>
  );
};

export default CardCourse;
