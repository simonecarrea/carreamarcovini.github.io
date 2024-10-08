import React, { useState, useEffect } from 'react';
import CardCourse from './cardCourse'; // Componente che rappresenta una card di corso
import FilterPanel from './filterPanel'; // Componente per i filtri
import ModaleFiltri from './filterModal'; // Assicurati di impostare il percorso corretto
import '../css/catalog.scss';
import listaVini from '../mock/listaVini.js';
import { BsFilterCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const CatalogPage = () => {
  const [wines, setWines] = useState(listaVini); // Stato per i vini
  const [filters, setFilters] = useState({}); // Stato per i filtri applicati
  const navigate = useNavigate();
  const [selectedWine, setSelectedWine] = useState(null);
  const [selectedWineList, setSelectedWineList] = useState(null);
  console.log("vini", wines);

  useEffect(() => {
    /* filteredVini = listaVini; */
  }, []);


  const [mostraModale, setMostraModale] = useState(false);

  const apriModale = () => {
    setMostraModale(true);
  };

  const chiudiModale = () => {
    setMostraModale(false);
  };

  const applicaFiltri = (filtri) => {
    console.log('Filtri applicati:', filtri);
    let filteredWines = listaVini.filter(vino => {
      return !filtri?.filtroTipologia || vino.tipologia === filtri?.filtroTipologia;
    });
    setWines(filteredWines);
    console.log("vini filtrati", filteredWines)
  };


  const handleWineClick = (course) => {
    // Qui puoi fare qualsiasi azione con i dati del corso
    // Ad esempio, puoi navigare alla pagina di dettaglio del corso
    setSelectedWine(course);
    console.log('Corso selezionato:', course);
  };

  const handleWineListClick = (listaVini) => {
    setSelectedWineList(listaVini);
    const category = listaVini[0].tipologia;
    navigate(`/catalog/${tipologia}`, { state: { selectedWineList: listaVini } });
    console.log('Vino selezionato:', selectedWineList, listaVini);
  };

  // Ottieni i corsi filtrati


  return (
    <div className="catalog-page">
      {/* <button onClick={apriModale}>Apri Modale Filtri</button> */}
      <BsFilterCircle className='iconaFiltri' onClick={apriModale}/>
      <ModaleFiltri mostraModale={mostraModale} chiudiModale={chiudiModale} applicaFiltri={applicaFiltri} />
      {/*  <FilterPanel filters={filters} setFilters={setFilters} /> */}
      <div className="course-list">
        {wines.map(vino => (
          <CardCourse key={vino.id} vino={vino} onWineClick={handleWineClick}/>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
