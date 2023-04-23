const Account = require('../models/accountModel');
const User = require('../models/userModel');
exports.getAllAccount = async (req, res) => {
  try {
    const accounts = await Account.find({});
    const finalResponse = [];

    for (let i = 0; i < accounts.length; i++) {
      const { userId } = accounts[i];
      const user = await User.findById(userId);

      const temp = { ...accounts[i]._doc, user: user.toObject() };
      finalResponse.push(temp);
    }

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: finalResponse.length,
      data: {
        accounts: finalResponse,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createAccount = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);

    // send the response with the newly created user data
    res.status(201).json({
      status: 'success',
      data: {
        Account: newAccount,
      },
    });
  } catch (err) {
    // handle any errors and send an error response
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const accountId = await Account.findById(req.params.id);
    const account = await Account.findByIdAndUpdate(accountId, req.body);
    res.status(200).json({
      status: 'success',
      data: {
        account,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const accountId = req.params.id;
    await Account.findByIdAndDelete(accountId);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAccountById = async (req, res) => {
  try {
    const accountId = req.params.id;
    const account = await Account.findById({ _id: accountId });

    res.status(200).json({
      status: 'success',
      data: {
        account,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
