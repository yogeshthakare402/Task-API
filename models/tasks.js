const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    "title" : String,
    "is_completed": Boolean
})
 const taskModel = mongoose.model("tasks", taskSchema);
module.exports = taskModel