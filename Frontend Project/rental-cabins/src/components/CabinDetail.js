import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CabinDetail = () => {
  const { id } = useParams();
  const [cabin, setCabin] = useState(null);

  useEffect(() => {
    axios.get(`/api/cabins/${id}`)
      .then(response => setCabin(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!cabin) return <p>Loading...</p>;

  return (
    <div>
      <h2>{cabin.name}</h2>
      <p>{cabin.description}</p>
      <p>Price per night: ${cabin.price_per_night}</p>
      <p>Number of beds: {cabin.number_of_beds}</p>
      <p>Rating: {cabin.star_rating} stars</p>
      <div>
        {cabin.image_urls.map((url, index) => (
          <img key={index} src={url} alt={`${cabin.name} image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default CabinDetail;
