const {dateclashCheck, taskIDCheck} = require('../model/tasks')
const {contract} = require("../contract/contract")

const createTask = async(req, res)=>{
    
const {taskDate} = req.body;
    const task = await dateclashCheck(taskDate);
    try{
        if(task!=="No Task Found"){
            res.status(409).json({status:409, message:"Date clash:Task cannot be added"})
        }
        else{
            res.status(200).json({status:200, message:"Task can be added"})
        }
    }
    catch(error){
        console.error(error)
    }
}
const updateTask = async(req, res)=>{
    const {taskDate} = req.body;
    
    const task = await dateclashCheck(taskDate);
    try{
        if(task!=="No Task Found"){
            res.status(409).json({status:409, message:"Date clash:Task cannot be updated"})
        }
        else{
            res.status(200).json({status:200, message:"Task can be updated"})
        }
    }
    catch(error){
        console.error(error)
    }
}
const deleteTask = async(req, res)=>{
    const {taskID} = req.body;
    const task = await taskIDCheck(taskID);
    try{
        if(task!=="No Task Found"){
            res.status(409).json({status:409, message:"Date clash:Task cannot be present"})
        }
        else{
            res.status(200).json({status:200, message:"Task can be deleted"})
        }
    }
    catch(error){
        console.error(error)
    }
}
const viewTask = async(req, res)=>{
    try{
        const {taskId} = req.params;
        const task = await contract.methods.viewTask(taskId).call();
        const {id, name, data} = task;
        const date = data;
        const numId = Number(id);
        const taskObj = {numId, name ,date}
        res.status(200).json({status:200, taskObj ,message:"Task Exist"})

    }catch(error){
        res.status(404).json({status:404, message:"Task does not exitst"})
        console.error(error)
    }   

}
const allTasks = async(req, res)=>{
    try{
        const task = await contract.methods.allTask().call();
        if(task.length == 0){
            res.status(400).json({status:400, message: "Task does not exist"})
        }
        else {
            const taskList = task.map(({id, name, data}) =>{
                const taskId = Number(id);
                const date = data;
                return {taskId, name, date};
            })
            res.status(200).json({status:200, taskList, message: "TaskList exist"})
        }
        // console.log(task);
    }catch(error){

    }
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    viewTask,
    allTasks
}