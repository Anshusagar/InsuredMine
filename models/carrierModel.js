const mongoose = require('mongoose');

const carrierSchema = new mongoose.Schema({
    company_name: { type: String, required: true },
});

const Account = mongoose.model('carrier', carrierSchema);
module.exports = Account;
