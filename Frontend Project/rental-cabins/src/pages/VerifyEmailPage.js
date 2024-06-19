import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VerifyEmailPage = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`/api/auth/verify-email/${token}`)
      .then(response => setMessage(response.data.message))
      .catch(error => setMessage(error.response.data.error));
  }, [token]);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmailPage;
