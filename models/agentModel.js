const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  agent: { type: String, required: true },
  userType: { type: String, required: true },
  producer: { type: String, required: true },
  policyId: { type: mongoose.Schema.Types.ObjectId,ref:"policy" },
});

const Agent = mongoose.model('agent', agentSchema);
module.exports = Agent;
