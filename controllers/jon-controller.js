import Job from "../models/Job.js";

export const saveJobData = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();

    res.status(200).json({
      message: "Job Saved Successfully",
    });
  } catch (error) {
    console.log("Job-Controller Error", error.message);
    res.status(500).json({
      error: error.message,
    });
  }
};

export const getJobData = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    console.log("Job-Controller Error", error.message);
    res.status(500).json({
      error: error.message,
    });
  }
};
