import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClassSchedule() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('/api/classes')
      .then((response) => {
        setClasses(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Class Schedule</h1>
      <ul>
        {classes.map((cls) => (
          <li key={cls._id}>
            {cls.name} - {cls.schedule.day} at {cls.schedule.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassSchedule;