const mongoose = require('mongoose');

const lobIdSchema = new mongoose.Schema({
  category_name: { type: String, required: true },
});

const LobId = mongoose.model('lobid', lobIdSchema);
module.exports = LobId;
