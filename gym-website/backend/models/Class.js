const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: String,
  description: String,
  schedule: {
    day: String,
    time: String,
  },
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer',
  },
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;