const express = require('express');
const router = express.Router();
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

router.post('/payment', async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    res.send(paymentIntent);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error processing payment' });
  }
});

module.exports = router;