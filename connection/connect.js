const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/task-api")
.then(()=>console.log("connected to mongodb"))