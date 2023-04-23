const Agent = require('../models/agentModel');

exports.getAllAgent = async (req, res) => {
  try {
    const agent = await Agent.find({});
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: agent.length,
      data: {
        agent,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail coming here',
      message: err.message,
    });
  }
};

exports.createAgent = async (req, res) => {
  try {
    const newagent = await Agent.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        agent: newagent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateAgent = async (req, res) => {
  try {
    const agent = await Agent.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: 'success',
      data: {
        agent,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteAgent = async (req, res) => {
  try {
    await Agent.findByIdAndDelete(req.params.id);

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
