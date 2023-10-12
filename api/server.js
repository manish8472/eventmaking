
const express = require('express');

const cors = require('cors')
const tasks = require('./routes/routes')

const app = express();

app.use(cors())
app.use(express.json())
app.use('/api/ethereum', tasks)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Running At PORT ${PORT}`);
})




// const ABI = require("./ABI.json");
// const {Web3} = require("web3");

// const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/II3jfCYp477k_UviQjYkCXDE3fb1LZx0")

// const contractAddress = "0xa2e39bf05b0064bea8981f92930e0e10ffdc29c8"
// const contract = new web3.eth.Contract(ABI, contractAddress);
// // console.log(contract)

// const dateclashCheck = async(taskDate)=>{
//     const tasks = await contract.methods.allTask().call();
//     const foundTask = tasks.find(task=>task.date===taskDate)

//     if(foundTask){
//         return foundTask.name;
//     }
//     else{
//         return "No Task Found"
//     }
// }

// const taskIDCheck = async(taskID)=>{
//     const tasks = await contract.methods.allTask().call();
//     const foundTask = tasks.find(task=>(task.id===taskID && task.name!==""))

//     if(foundTask){
//         return foundTask.name;
//     }
//     else{
//         return "No Task Found"
//     }
// }

// app.post("/api/ethereum/create-task", async(req, res)=>{
//     // console.log(req.body)
//     const {taskDate} = req.body;
//     const task = await dateclashCheck(taskDate);
//     try{
//         if(task!=="No Task Found"){
//             res.status(409).json({status:409, message:"Date clash:Task cannot be added"})
//         }
//         else{
//             res.status(200).json({status:200, message:"Task can be added"})
//         }
//     }
//     catch(error){
//         console.error(error)
//     }
// })

// app.post("/api/ethereum/update-task", async(req, res)=>{
//     const {taskDate} = req.body;
    
//     const task = await dateclashCheck(taskDate);
//     try{
//         if(task!=="No Task Found"){
//             res.status(409).json({status:409, message:"Date clash:Task cannot be updated"})
//         }
//         else{
//             res.status(200).json({status:200, message:"Task can be updated"})
//         }
//     }
//     catch(error){
//         console.error(error)
//     }
// })

// app.delete("/api/ethereum/delete-task", async(req, res)=>{
//     const {taskID} = req.body;
//     const task = await taskIDCheck(taskID);
//     try{
//         if(task!=="No Task Found"){
//             res.status(409).json({status:409, message:"Date clash:Task cannot be present"})
//         }
//         else{
//             res.status(200).json({status:200, message:"Task can be deleted"})
//         }
//     }
//     catch(error){
//         console.error(error)
//     }
// })

// app.get("/api/ethereum/view-task/:taskId", async(req,res) =>{

//     try{
//         const {taskId} = req.params;
//         const task = await contract.methods.viewTask(taskId).call();
//         const {id, name, data} = task;
//         const date = data;
//         const numId = Number(id);
//         const taskObj = {numId, name ,date}
//         res.status(200).json({status:200, taskObj ,message:"Task Exist"})

//     }catch(error){
//         res.status(404).json({status:404, message:"Task does not exitst"})
//         console.error(error)
//     }   
// })

// app.get("/api/ethereum/view-all-task", async(req, res) => {
//     try{
//         const task = await contract.methods.allTask().call();
//         if(task.length == 0){
//             res.status(400).json({status:400, message: "Task does not exist"})
//         }
//         else {
//             const taskList = task.map(({id, name, data}) =>{
//                 const taskId = Number(id);
//                 const date = data;
//                 return {taskId, name, date};
//             })
//             res.status(200).json({status:200, taskList, message: "TaskList exist"})
//         }
//         // console.log(task);
//     }catch(error){

//     }
// })



