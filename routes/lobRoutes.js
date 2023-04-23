const express = require('express');
const lobController = require('../controller/LobController');

const router = express.Router();

router.route('/').get(lobController.getAllLob).post(lobController.createLob);

module.exports = router;
