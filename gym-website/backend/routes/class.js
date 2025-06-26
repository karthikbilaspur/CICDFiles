const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

// Create a new class
router.post('/', async (req, res) => {
  try {
    const { name, description, schedule, trainer } = req.body;
    const newClass = new Class({ name, description, schedule, trainer });
    await newClass.save();
    res.send({ message: 'Class created successfully' });
  } catch (err) {
    res.status(400).send({ message: 'Error creating class' });
  }
});

// Get all classes
router.get('/', async (req, res) => {
  try {
    const classes = await Class.find().populate('trainer');
    res.send(classes);
  } catch (err) {
    res.status(400).send({ message: 'Error getting classes' });
  }
});

// Update a class
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, schedule, trainer } = req.body;
    await Class.findByIdAndUpdate(id, { name, description, schedule, trainer });
    res.send({ message: 'Class updated successfully' });
  } catch (err) {
    res.status(400).send({ message: 'Error updating class' });
  }
});

// Delete a class
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Class.findByIdAndDelete(id);
    res.send({ message: 'Class deleted successfully' });
  } catch (err) {
    res.status(400).send({ message: 'Error deleting class' });
  }
});

module.exports = router;