const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  carrierId: { type: mongoose.Schema.Types.ObjectId, ref: 'carrier' },
  lobId: { type: mongoose.Schema.Types.ObjectId, ref: 'lobid' },
  policy_number: { type: String, required: true },
  policy_mode: { type: String, required: true },
  policy_type: { type: String, required: true },
  policy_start_date: { type: Date, required: true },
  policy_end_date: { type: Date, required: true },
  csr: { type: String, required: true },
});

const Policy = mongoose.model('policy', policySchema);
module.exports = Policy;
