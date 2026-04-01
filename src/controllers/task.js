const {
  getTasks,
  createTask,
  updateTask,
  updateTaskCheckbox,
  deleteTask,
  deleteTasks,
} = require("../services/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await getTasks();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send({
      message: "Failed to get tasks",
      statusCode: 400,
    });
  }
};

const createOneTask = async (req, res) => {
  try {
    const { text } = req.body;

    const task = await createTask(text);
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send({
      message: "Failed to create task",
      statusCode: 400,
    });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const updatedTask = await updateTask(id, text);

    res.status(200).send(updatedTask);
  } catch (error) {
    res.status(400).send({
      message: "Failed to update task",
      statusCode: 400,
    });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isCheck } = req.body;

    const updatedStatus = await updateTaskCheckbox(id, isCheck);

    res.status(200).send(updatedStatus);
  } catch (error) {
    res.status(400).send({
      message: "Failed to toggle task status",
      statusCode: 400,
    });
  }
};

const deleteOneTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await deleteTask(id);

    res.status(200).send({
      task: deletedTask,
    });
  } catch (error) {
    res.status(400).send({
      message: "Failed to delete task",
      statusCode: 400,
    });
  }
};

const deleteAllTasks = async (req, res) => {
  try {
    const result = await deleteTasks();

    res.status(200).send({
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res.status(400).send({
      message: "Failed to delete all tasks",
      statusCode: 400,
    });
  }
};

module.exports = {
  getAllTasks,
  createOneTask,
  updateOneTask,
  updateTaskStatus,
  deleteOneTask,
  deleteAllTasks,
};
