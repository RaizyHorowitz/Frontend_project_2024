import React from 'react';
import { Link } from 'react-router-dom';

const CabinCard = ({ cabin }) => (
  <div className="cabin-card">
    <h3>{cabin.name}</h3>
    <p>Price per night: ${cabin.price_per_night}</p>
    <p>Number of beds: {cabin.number_of_beds}</p>
    <p>Rating: {cabin.star_rating} stars</p>
    <Link to={`/cabin/${cabin.id}`}>View Details</Link>
  </div>
);

export default CabinCard;
