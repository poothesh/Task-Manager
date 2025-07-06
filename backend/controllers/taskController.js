const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  try {
    // Get user's own tasks
    const ownTasks = await Task.find({ owner: req.userId });
    
    // Get tasks shared with the user
    const User = require("../models/User");
    const user = await User.findById(req.userId);
    const sharedTasks = await Task.find({ 
      sharedWith: user.email,
      owner: { $ne: req.userId } // Not owned by the current user
    }).populate('owner', 'name email'); // Include owner's name and email
    
    // Combine and return all tasks
    const allTasks = [...ownTasks, ...sharedTasks];
    res.json(allTasks);
  } catch (err) {
    console.error("Get tasks error:", err);
    res.status(500).json({ msg: "Failed to get tasks" });
  }
};

exports.addTask = async (req, res) => {
  const task = await Task.create({ ...req.body, owner: req.userId });
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};

exports.shareTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { email } = req.body;
    
    // Find the task
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    
    // Check if user owns the task
    if (task.owner.toString() !== req.userId) {
      return res.status(403).json({ msg: "Not authorized to share this task" });
    }
    
    // Find the user to share with
    const User = require("../models/User");
    const userToShareWith = await User.findOne({ email });
    if (!userToShareWith) {
      return res.status(404).json({ msg: "User not found" });
    }
    
    // Check if already shared
    if (task.sharedWith.includes(email)) {
      return res.status(400).json({ msg: "Task already shared with this user" });
    }
    
    // Add to sharedWith array
    task.sharedWith.push(email);
    await task.save();
    
    res.json({ msg: "Task shared successfully", task });
  } catch (err) {
    console.error("Share task error:", err);
    res.status(500).json({ msg: "Failed to share task" });
  }
};