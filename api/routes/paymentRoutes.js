const express = require('express');
const router = express.Router();
const paymentControllers = require('../controllers/paymentControllers');

// Route for creating a payment intent
router.post('/create-payment-intent', paymentControllers.createPaymentIntent);

module.exports = router;