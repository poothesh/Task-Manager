// backend/models/Task.js
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  dueDate: {
    type: String, // You can change to Date if needed
    required: true,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low",
  },
  status: {
    type: String,
    enum: ["In Progress", "Completed"],
    default: "In Progress",
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sharedWith: [
    {
      type: String, // could be email or user ID
    }
  ],
}, {
  timestamps: true
});

module.exports = mongoose.model("Task", TaskSchema);
