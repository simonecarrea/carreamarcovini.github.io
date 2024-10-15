import React, { useState, useEffect } from 'react';
import CardCourse from './cardCourse'; // Componente che rappresenta una card di corso
import FilterPanel from './filterPanel'; // Componente per i filtri
import ModaleFiltri from './filterModal'; // Assicurati di impostare il percorso corretto
import '../css/catalog.scss';
import { BsFilterCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { retrieveWineList } from '../services/wineService'; 

const CatalogPage = () => {
  const [allWines, setAllWines] = useState([]); // Stato per tutti i vini originali
  const [filteredWines, setFilteredWines] = useState([]); // Stato per i vini filtrati
  const [filters, setFilters] = useState({}); // Stato per i filtri applicati
  const navigate = useNavigate();
  const [selectedWine, setSelectedWine] = useState(null);
  const [mostraModale, setMostraModale] = useState(false);

  console.log("vini", filteredWines); 

  const apriModale = () => {
    setMostraModale(true);
  };

  const chiudiModale = () => {
    setMostraModale(false);
  };

  const fetchWines = async () => {
    try {
      const wineList = await retrieveWineList();
      setAllWines(wineList); // Salva la lista completa di vini
      setFilteredWines(wineList); // Inizializza la lista filtrata con tutti i vini
      console.log('Wine List:', wineList);
    } catch (error) {
      console.error('Error retrieving wine list:', error);
    }
  };

  useEffect(() => {
    fetchWines();
  }, []);

  const applicaFiltri = (filtri) => {
    console.log('Filtri applicati:', filtri);
    setFilters(filtri);

    const filteredWines = allWines.filter(vino => {
      return !filtri?.filtroTipologia || vino.tipologia === filtri?.filtroTipologia;
    });

    setFilteredWines(filteredWines);
    console.log("vini filtrati", filteredWines);
  };

  const handleWineClick = (course) => {
    setSelectedWine(course);
    console.log('Corso selezionato:', course);
  };

  return (
    <div className="catalog-page">
      <div className='filtri'>
        <h2>Filtri</h2>
        <BsFilterCircle className='iconaFiltri' onClick={apriModale}/>
      </div>
      <ModaleFiltri mostraModale={mostraModale} chiudiModale={chiudiModale} applicaFiltri={applicaFiltri} />
      <div className="course-list">
        {filteredWines.map(vino => (
          <CardCourse key={vino.id} vino={vino} onWineClick={handleWineClick}/>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
