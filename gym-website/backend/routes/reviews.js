const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.send(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error getting reviews' });
  }
});

router.post('/reviews', async (req, res) => {
  try {
    const { rating, review } = req.body;
    const newReview = new Review({ rating, review });
    await newReview.save();
    res.send(newReview);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error creating review' });
  }
});

module.exports = router;