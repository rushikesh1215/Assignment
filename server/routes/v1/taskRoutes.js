const express = require("express");
const router = express.Router();
const Task = require("../../models/Task");
const { auth } = require("../../middlewares/authMiddleware");

// Create task
router.post("/", auth, async (req, res) => {
  try {
    const task = new Task({ ...req.body, owner: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get tasks
router.get("/", auth, async (req, res) => {
  try {
    let tasks;
    if (req.user.role === "admin") {
      tasks = await Task.find();
    } else {
      tasks = await Task.find({ owner: req.user.id });
    }
    res.json(tasks);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// Update task
router.put("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Not found" });

    if (req.user.role !== "admin" && task.owner.toString() !== req.user.id)
      return res.status(403).json({ message: "Forbidden" });

    Object.assign(task, req.body);
    await task.save();
    res.json(task);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete task
router.delete("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Not found" });

    if (req.user.role !== "admin" && task.owner.toString() !== req.user.id)
      return res.status(403).json({ message: "Forbidden" });

    await task.deleteOne();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
