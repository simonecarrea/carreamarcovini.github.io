import React from 'react';
import '../css/filterPanel.scss';


const FilterPanel = ({ filters, setFilters }) => {
  const handleCategoryChange = event => {
    setFilters({ ...filters, category: event.target.value });
  };

  const handleLevelChange = event => {
    setFilters({ ...filters, level: event.target.value });
  };

  return (
    <div className="filter-panel">
      <h2>Filtri</h2>
      <div className="filter-section">
        <label htmlFor="category">Categoria:</label>
        <select id="category" value={filters.category} onChange={handleCategoryChange}>
          <option value="">Tutte</option>
          <option value="azienda">La nostra azienda</option>
          <option value="tool">Tool aziendali</option>
          {/* Altre opzioni di categoria */}
        </select>
      </div>
      <div className="filter-section">
        <label htmlFor="level">Livello:</label>
        <select id="level" value={filters.level} onChange={handleLevelChange}>
          <option value="">Tutti</option>
          <option value="principiante">Principiante</option>
          <option value="intermedio">Intermedio</option>
          {/* Altre opzioni di livello */}
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
