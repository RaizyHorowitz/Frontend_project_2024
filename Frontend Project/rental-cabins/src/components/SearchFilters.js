import React, { useState } from 'react';

const SearchFilters = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [people, setPeople] = useState(1);

  const handleSearch = () => {
    onSearch({ location, checkIn, checkOut, people });
  };

  return (
    <div className="search-filters">
      <label>
        Location:
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Select Location</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="Central">Central</option>
          <option value="Jerusalem">Jerusalem</option>
          <option value="Mitzpe Ramon">Mitzpe Ramon</option>
        </select>
      </label>
      <label>
        Check-In:
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </label>
      <label>
        Check-Out:
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </label>
      <label>
        Number of People:
        <input type="number" min="1" value={people} onChange={(e) => setPeople(e.target.value)} />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFilters;
