const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rewardPoints: {
    type: String,
    // required: true,
  },
  tasks: [{
    name: {
      type: String,
    //   required: true,
    },
    status: {
        type: String,
        default: "not verified"
    },

  }],
});

module.exports = mongoose.model("User", userSchema);
