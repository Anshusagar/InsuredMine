const Carrier = require('../models/carrierModel');

exports.getAllCarrier = async (req, res) => {
  try {
    const users = await Carrier.find({});
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail coming here',
      message: err.message,
    });
  }
};

exports.createCarrier = async (req, res) => {
  try {
    const newUser = await Carrier.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateCarrier = async (req, res) => {
  try {
    const user = await Carrier.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteCarrier = async (req, res) => {
  try {
    await Carrier.findByIdAndDelete(req.params.id);

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
