import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CabinCard from '../components/CabinCard';
import AddCabinModal from '../components/AddCabinModal';
import SearchFilters from '../components/SearchFilters';

const HomePage = () => {
  const [cabins, setCabins] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchCabins = (filters = {}) => {
    axios.get('/api/cabins', { params: filters })
      .then(response => setCabins(response.data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchCabins();
  }, []);

  const handleAddCabin = (newCabin) => {
    setCabins([...cabins, newCabin]);
  };

  const handleSearch = (filters) => {
    fetchCabins(filters);
  };

  return (
    <div>
      <h1>Rental Cabins</h1>
      <SearchFilters onSearch={handleSearch} />
      <button onClick={() => setShowModal(true)}>Add Cabin for Rent</button>
      {showModal && <AddCabinModal onClose={() => setShowModal(false)} onSave={handleAddCabin} />}
      <div className="cabin-list">
        {cabins.map(cabin => (
          <CabinCard key={cabin.id} cabin={cabin} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
