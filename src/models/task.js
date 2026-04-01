const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  isCheck: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Tasks", taskSchema);
