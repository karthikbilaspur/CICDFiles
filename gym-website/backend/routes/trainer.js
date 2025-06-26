const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');

// Create a new trainer
router.post('/', async (req, res) => {
  try {
    const { name, certifications, specialties, schedule } = req.body;
    const newTrainer = new Trainer({ name, certifications, specialties, schedule });
    await newTrainer.save();
    res.send({ message: 'Trainer created successfully' });
  } catch (err) {
    res.status(400).send({ message: 'Error creating trainer' });
  }
});

// Get all trainers
router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.send(trainers);
  } catch (err) {
    res.status(400).send({ message: 'Error getting trainers' });
  }
});

// Update a trainer
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, certifications, specialties, schedule } = req.body;
    await Trainer.findByIdAndUpdate(id, { name, certifications, specialties, schedule });
    res.send({ message: 'Trainer updated successfully' });
  } catch (err) {
    res.status(400).send({ message: 'Error updating trainer' });
  }
});

// Delete a trainer
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Trainer.findByIdAndDelete(id);
    res.send({ message: 'Trainer deleted successfully' });
  } catch (err) {
    res.status(400).send({ message: 'Error deleting trainer' });
  }
});

module.exports = router;