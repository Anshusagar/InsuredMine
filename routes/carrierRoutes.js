const express = require('express');
const carrierController = require('../controller/CarrierController');

const router = express.Router();

router
  .route('/')
  .get(carrierController.getAllCarrier)
  .post(carrierController.createCarrier);

module.exports = router;
