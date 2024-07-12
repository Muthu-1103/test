const express = require('express')
const app = express()
const mongoose = require('mongoose')
const body_parser = require('body-parser')
const cors = require('cors')
app.use(body_parser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/Afford').then(() => {
    console.log("connected")
}).catch((err) => {
    console.log(err)
})
const taskRouter = require("./view/taskRoutes");
app.use("/tasks", taskRouter);
app.listen(8000, () => {
    console.log("Serving running");
})