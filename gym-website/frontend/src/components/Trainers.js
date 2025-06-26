import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainerProfile from './TrainerProfile';

function Trainers() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios.get('/api/trainers')
      .then((response) => {
        setTrainers(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Trainers</h1>
      {trainers.map((trainer) => (
        <TrainerProfile key={trainer._id} trainer={trainer} />
      ))}
    </div>
  );
}

export default Trainers;