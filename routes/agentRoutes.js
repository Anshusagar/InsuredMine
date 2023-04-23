const express = require('express');
const agentController = require('../controller/AgentController');

const router = express.Router();

router
  .route('/')
  .get(agentController.getAllAgent)
  .post(agentController.createAgent);

module.exports = router;
