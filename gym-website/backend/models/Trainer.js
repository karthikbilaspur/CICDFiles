const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: String,
  certifications: [String],
  specialties: [String],
  schedule: {
    day: String,
    time: String,
  },
});

const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;