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
  organization: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
    default: 0,
  }
});

const candidate = mongoose.model("candidate", userSchema);

export default candidate;
