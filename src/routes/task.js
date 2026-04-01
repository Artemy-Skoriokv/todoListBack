const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createOneTask,
  updateOneTask,
  updateTaskStatus,
  deleteOneTask,
  deleteAllTasks,
} = require("../controllers/task");
const { validationText } = require("../middlewares/task-validation");

router.get("/tasks", getAllTasks);
router.post("/tasks", validationText, createOneTask);
router.patch("/tasks/:id/text", validationText, updateOneTask);
router.patch("/tasks/:id/status", updateTaskStatus);
router.delete("/tasks/:id", deleteOneTask);
router.delete("/tasks", deleteAllTasks);

module.exports = router;
