const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  account_type: { type: String, required: true },
  account_name: { type: String, required: true },
  premium_amount: { type: String, required: true },
});

const Account = mongoose.model('account', accountSchema);
module.exports = Account;
