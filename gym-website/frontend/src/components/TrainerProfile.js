import React from 'react';

function TrainerProfile({ trainer }) {
  return (
    <div>
      <h1>{trainer.name}</h1>
      <p>Certifications: {trainer.certifications.join(', ')}</p>
      <p>Specialties: {trainer.specialties.join(', ')}</p>
    </div>
  );
}

export default TrainerProfile;