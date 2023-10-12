const {contract} = require("../contract/contract")

const dateclashCheck = async(taskDate)=>{
    const tasks = await contract.methods.allTask().call();
    const foundTask = tasks.find(task=>task.data.toString()===taskDate)
    if(foundTask){
        return foundTask.name;
    }
    else{
        return "No Task Found"
    }
}

const taskIDCheck = async(taskID)=>{
    const tasks = await contract.methods.allTask().call();
    const foundTask = tasks.find(task=>(task.id===taskID && task.name!==""))

    if(foundTask){
        return foundTask.name;
    }
    else{
        return "No Task Found"
    }
}

module.exports ={dateclashCheck, taskIDCheck}