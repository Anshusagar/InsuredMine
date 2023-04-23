const express = require('express');
const accountController = require('../controller/AccountController');

const router = express.Router();

router
  .route('/')
  .get(accountController.getAllAccount)
  .post(accountController.createAccount);
router
  .route('/:id')
  .get(accountController.getAccountById)
  .patch(accountController.updateAccount)
  .delete(accountController.deleteAccount);
module.exports = router;
