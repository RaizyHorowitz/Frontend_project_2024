import React, { useState } from 'react';
import axios from 'axios';

const AddCabinModal = ({ onClose, onSave }) => {
  const [cabinData, setCabinData] = useState({
    name: '',
    location: '',
    address: '',
    price_per_night: '',
    number_of_beds: '',
    star_rating: '',
    pool: false,
    jacuzzi: false,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCabinData({
      ...cabinData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/cabins', cabinData)
      .then(response => {
        onSave(response.data);
        onClose();
      })
      .catch(error => console.error(error));
  };

  const handlePriceEstimation = () => {
    axios.post('/api/price-estimator', cabinData)
      .then(response => {
        setCabinData({ ...cabinData, price_per_night: response.data.estimatedPrice });
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={cabinData.name} onChange={handleChange} required />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={cabinData.location} onChange={handleChange} required />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={cabinData.address} onChange={handleChange} required />
          </label>
          <label>
            Number of Beds:
            <input type="number" name="number_of_beds" value={cabinData.number_of_beds} onChange={handleChange} required />
          </label>
          <label>
            Star Rating:
            <input type="number" name="star_rating" value={cabinData.star_rating} onChange={handleChange} required />
          </label>
          <label>
            Pool:
            <input type="checkbox" name="pool" checked={cabinData.pool} onChange={handleChange} />
          </label>
          <label>
            Jacuzzi:
            <input type="checkbox" name="jacuzzi" checked={cabinData.jacuzzi} onChange={handleChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={cabinData.description} onChange={handleChange} required />
          </label>
          <button type="button" onClick={handlePriceEstimation}>Estimate Price per Night</button>
          <label>
            Estimated Price per Night:
            <input type="number" name="price_per_night" value={cabinData.price_per_night} onChange={handleChange} readOnly />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddCabinModal;
