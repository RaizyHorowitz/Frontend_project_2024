import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchFilters = ({ onSearch }) => {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [people, setPeople] = useState(1);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('https://api.example.com/locations');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  const handleSearch = () => {
    onSearch({ location, checkIn, checkOut, people });
  };

  return (
    <div className="search-filters">
      <label>
        Location:
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Select Location</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
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
