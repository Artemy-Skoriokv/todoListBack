const { text } = require("node:stream/consumers");
const Task = require("../models/task");

const getTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

const createTask = async (text) => {
  const newTask = new Task({ text });
  const savedTask = await newTask.save();
  return savedTask;
};

const updateTask = async (id, text) => {
  const updateTask = await Task.findByIdAndUpdate(
    id,
    { text },
    { new: true }
  );
  return updateTask;
};

const updateTaskCheckbox = async (id, isCheck) => {
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { isCheck },
    { new: true }
  );
  
  return updatedTask;
};

const deleteTask = async (id) => {
  const deleteTask = await Task.findByIdAndDelete(id);
  return deleteTask;
};

const deleteTasks = async () => {
  const deleteTasks = await Task.deleteMany({});
  return deleteTasks;
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  updateTaskCheckbox,
  deleteTask,
  deleteTasks,
};
