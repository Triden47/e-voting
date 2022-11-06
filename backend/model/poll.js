import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  candidates: {
    type: Array,
  },
  state: {
    type: String,
    enum: ["inactive", "active", "ended"],
    default: "inactive"
  },
});

const poll = mongoose.model("poll", userSchema);

export default poll;
