const express = require('express')
const router = express.Router()
const taskController = require('../controller/taskController')

//Define all apis related to task
router.get("/getAllTasks", taskController.getAllTasks);
router.post("/postTask",taskController.postTask);
router.put("/update/:id",taskController.updateDetails)
router.post("/delete/:id",taskController.deleteDetails)
module.exports = router