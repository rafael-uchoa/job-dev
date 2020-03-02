const Job = require('../models/Job');

/*
  @desc   Get all jobs
  @route  GET /api
  @access Public
*/
exports.getJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
    res.status(200).json(allJobs);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

/*
  @desc   Create a new job
  @route  POST /api
  @access Public
*/
exports.createJob = async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
