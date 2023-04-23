const Lob = require('../models/lobModel');

exports.getAllLob = async (req, res) => {
  try {
    const lob = await Lob.find({});
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: lob.length,
      data: {
        lob,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail coming here',
      message: err.message,
    });
  }
};

exports.createLob = async (req, res) => {
  try {
    const newLob = await Lob.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        Lob: newLob,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateLob = async (req, res) => {
  try {
    const Lob = await Lob.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: 'success',
      data: {
        Lob,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteLob = async (req, res) => {
  try {
    await Lob.findByIdAndDelete(req.params.id);

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
