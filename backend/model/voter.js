import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  poll_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

const voter = mongoose.model("voter", userSchema);

export default voter;
