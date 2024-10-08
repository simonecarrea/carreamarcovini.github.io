// ModaleFiltri.js

import React, { useState } from 'react';
import '../css/filterModal.scss';
function ModaleFiltri({ mostraModale, chiudiModale, applicaFiltri }) {
    const [filtroTipologia, setFiltroTipologia] = useState('');
    const [filtroProduttore, setFiltroProduttore] = useState('');

    const gestisciApplicaFiltri = () => {
        console.log("Chiusura modale", filtroTipologia, filtroProduttore);
        // Esegui le azioni desiderate con i filtri (ad esempio, passa i filtri a una funzione di filtraggio)
        applicaFiltri({ filtroTipologia, filtroProduttore });
        // Chiudi la modale
        chiudiModale();
    };

    return (
        <div className={`modale ${mostraModale ? 'aperta' : ''}`}>
            <div className="contenuto-modale">
                {/* <h2>Modale Filtri</h2>
        <label>
          Filtro 1:
          <input type="text" value={filtro1} onChange={(e) => setFiltro1(e.target.value)} />
        </label>
        <label>
          Filtro 2:
          <input type="text" value={filtro2} onChange={(e) => setFiltro2(e.target.value)} />
        </label> */}
                <div className="filter-panel">
                    <h2>Filtri</h2>
                    <div className="filter-section">
                        <label htmlFor="category">Tipologia:</label>
                        <select id="category" value={filtroTipologia} onChange={(e) => setFiltroTipologia(e.target.value)}>
                            <option value="">Tutte</option>
                            <option value="rosso">Vino Rosso</option>
                            <option value="bianco">Vino Bianco</option>
                            {/* Altre opzioni di categoria */}
                        </select>
                    </div>
                    <div className="filter-section">
                        <label htmlFor="level">Produttore:</label>
                        <select id="level" value={filtroProduttore} onChange={(e) => setFiltroProduttore(e.target.value)}>
                            <option value="">Tutti</option>
                            <option value="principiante">Teo Costa</option>
                            <option value="intermedio">Scriani</option>
                        </select>
                    </div>
                </div>
                <button onClick={gestisciApplicaFiltri}>Applica Filtri</button>
                <button onClick={chiudiModale}>Chiudi</button>
            </div>
        </div>
    );
}

export default ModaleFiltri;
