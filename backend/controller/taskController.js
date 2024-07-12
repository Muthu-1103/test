const taskModel = require("../model/taskModel");

const getAllTasks = async (req, res) => {
    try {
        const taskData = await taskModel.find();
        console.log(taskData);
        res.status(200).json(taskData);

    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
const updateDetails=async (req,res)=>{
    try {
        const t=req.params.id;
        await taskModel.updateOne({_id:t},{$set:{taskTitle:req.body.taskTitle,taskDescription:req.body.taskDescription}});
        res.status(200).send("Success")
    } catch (error) {
        console.log(error);
    }
}
const deleteDetails=async(req,res)=>{
    try {
        const t=req.params.id;
        console.log(t);
        await taskModel.deleteOne({_id:t})
        res.status(200).send("Success")
    } catch (error) {
    console.log(error);
    }
}
const postTask = async (req, res) => {
    try {
        const result = req.body;
        console.log(result);
        const task = new taskModel(result);
        await task.save();
        res.status(200).send("Success")
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}

module.exports = {
    getAllTasks: getAllTasks,
    postTask:postTask,
    updateDetails:updateDetails,
    deleteDetails:deleteDetails
}