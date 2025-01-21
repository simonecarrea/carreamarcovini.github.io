import React, { useState, useEffect } from 'react';
import FilterPanel from './filterPanel'; // Componente per i filtri
import ModaleFiltri from './filterModal'; // Assicurati di impostare il percorso corretto
import '../css/catalog.scss';
import { BsFilterCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { retrieveBeerListCarreaMarco } from '../services/wineService'; 
import CardBeer from './cardBeer';

const CatalogPage = () => {
    const [allBeers, setallBeers] = useState([]); // Stato per tutti i vini originali
    const [filteredBeers, setfilteredBeers] = useState([]); // Stato per i vini filtrati
    const [filters, setFilters] = useState({}); // Stato per i filtri applicati
    const navigate = useNavigate();
    const [selectedWine, setSelectedWine] = useState(null);
    const [mostraModale, setMostraModale] = useState(false);
  
    console.log("birre", filteredBeers); 
  
    const apriModale = () => {
      setMostraModale(true);
    };
  
    const chiudiModale = () => {
      setMostraModale(false);
    };
  
    const fetchBeers = async () => {
      try {
        const beerList = await retrieveBeerListCarreaMarco();
        setallBeers(beerList); // Salva la lista completa di vini
        setfilteredBeers(beerList); // Inizializza la lista filtrata con tutti i vini
        console.log('Beer List:', beerList);
      } catch (error) {
        console.error('Error retrieving beer list:', error);
      }
    };
  
    useEffect(() => {
      fetchBeers();
    }, []);
  
    const applicaFiltri = (filtri) => {
      console.log('Filtri applicati:', filtri);
      setFilters(filtri);
  
      const filteredBeers = allBeers.filter(birra => {
        return !filtri?.filtroTipologia || birra.tipologia === filtri?.filtroTipologia;
      });
  
      setfilteredBeers(filteredBeers);
      console.log("vini filtrati", filteredBeers);
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
          {filteredBeers.map(birra => (
            <CardBeer key={birra.id} birra={birra} onBeerClick={handleWineClick}/>
          ))}
        </div>
      </div>
    );
  };
  
  export default CatalogPage;