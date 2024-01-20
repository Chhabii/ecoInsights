const User = require("../models/userModel");

const addNewTask = async (req, res) => {
  try {
    const newTask = { name: req.body.name };
    await User.findOneAndUpdate(
      { _id: req.params.userId },
      {
        $push: { tasks: newTask },
      }
    );
    return res.status(200).send("task added successfull!");
  } catch (error) {}
  return res.status(400).send("task not added!");
};

const updateTaskStatus = async (req, res) => {
  try {
    const newStatus = req.body.status;
    await User.findOneAndUpdate(
      { _id: req.params.userId, "tasks._id": req.body.taskId },
      { $set: { "tasks.$.status": "verified" } }
    );
    return res.status(200).send("task status updated successfull!");
  } catch (error) {
    return res.status(400).send("task not updated!" + error);
  }
};
const updateReward = async (req, res) => {
  try {
    console.log(req.params);

    const user = await User.find({ _id: req.params.userid });
    await User.findOneAndUpdate(
      { _id: req.params.userid },
      { $set: { rewardPoints: `${parseInt(user[0].rewardPoints) + 1}` } }
    );
    return res.status(200).send("reward updated!");
  } catch (error) {
    return res.status(400).send("reward not updated!" + error);
  }
};

const registerUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(200).send("user registration successfull!");
  } catch (error) {
    return res.status(400).send("user registration unsuccessfull!");
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("error: " + error);
  }
};

module.exports = {
  addNewTask,
  registerUser,
  updateTaskStatus,
  getUser,
  updateReward,
};
