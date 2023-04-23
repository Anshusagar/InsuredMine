const Policy = require('../models/policyModel');
const User = require('../models/userModel');
const Carrier = require('../models/carrierModel');
const Lob = require('../models/lobModel');
exports.getAllPolicy = async (req, res) => {
  try {
    const policies = await Policy.find({});
    const finalResponse = [];

    for (let i = 0; i < policies.length; i++) {
      const { userId, carrierId, lobId } = policies[i];
      const user = await User.findById(userId);
      const carrier = await Carrier.findById(carrierId);
      const lob = await Lob.findById(lobId);
      const temp = {
        ...policies[i]._doc,
        user: user.toObject(),
        carrier: carrier.toObject(),
        lob: lob.toObject(),
      };
      finalResponse.push(temp);
    }
    res.status(200).json({
      status: 'success',
      results: finalResponse.length,
      data: {
        policies: finalResponse,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail coming here',
      message: err.message,
    });
  }
};

exports.createPolicy = async (req, res) => {
  try {
    const newPolicy = await Policy.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        policy: newPolicy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updatePolicy = async (req, res) => {
  try {
    const policyId = await Policy.findById(req.params.id);
    const policy = await Policy.findByIdAndUpdate(policyId, req.body);

    res.status(200).json({
      status: 'success',
      data: {
        policy,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deletePolicy = async (req, res) => {
  try {
    const policyId = req.params.id;
    await Policy.findByIdAndDelete(policyId);

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

exports.getPolicyById = async (req, res) => {
  try {
    const policyId = req.params.id;
    const policy = await Policy.findById({ _id: policyId });

    res.status(200).json({
      status: 'success',
      data: {
        policy,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
