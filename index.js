const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const tasksRoutes = require("./task");
const connect = require("./connection/connect")




app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/v1/tasks",tasksRoutes)



app.listen(process.env.PORT || 8000, ()=>console.log("server is running on 8000"))