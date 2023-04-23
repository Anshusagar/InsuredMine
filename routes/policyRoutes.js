const express = require('express');
const policyController = require('../controller/PolicyController');

const router = express.Router();

router
  .route('/')
  .get(policyController.getAllPolicy)
  .post(policyController.createPolicy);

router
  .route('/:id')
  .get(policyController.getPolicyById)
  .patch(policyController.updatePolicy)
  .delete(policyController.deletePolicy);
module.exports = router;
