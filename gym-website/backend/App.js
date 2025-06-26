const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const classRoutes = require('./routes/class');
const trainerRoutes = require('./routes/trainer');

app.use('/api/classes', classRoutes);
app.use('/api/trainers', trainerRoutes);
app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});