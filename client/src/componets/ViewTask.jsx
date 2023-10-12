import { useState } from "react";
import Navigation from "../pages/Navigation";

const ViewTask = () => {
    const [task, setTask] = useState({numId:null,name:null, date:null})
    const [modalVisible, setModalVisible] = useState(false)
    const [modalContent, setModalContent] = useState("");

    const viewTask = async(event)=>{
        try{
            event.preventDefault()
            const taskID = document.getElementById("taskID").value;
            const res = await fetch(`http://localhost:3000/api/ethereum/view-task/${taskID}`, {
                method:"GET",
                headers: {
                    "content-type": "application/json"
                },
            })
            const data = await res.json()
            if(data.status===200){
                setTask(data.taskObj)
                console.log(data.taskObj);
            }
            else{
                throw new Error
            }
        }
        catch(error){
            setModalContent("Task does not exist")
            setModalVisible(true)
            // console.log(error)
        }
    }

    const closeModal = () =>{
        setModalVisible(false)
        setModalContent("")
    }

    return ( <>
    <Navigation/>
    <div className="view_task todo_btn">
        {task.numId!=="" && task.name!==null && task.date!=null ? (
            <div className="view_task_by_id view_all_tasks_card">
                <p>Task ID: {task.numId}</p>
                <p>Task Name: {task.name} </p>
                <p>Task Date: {task.date} </p>
            </div>
        ):(
            <div className="empty_div"></div>
        )
    }
        {modalVisible && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>
                        &times;
                    </span>
                    <p>{modalContent}</p>
                </div>
               
            </div>
        )}
        <form onSubmit={viewTask}>
            <label>
            ID:
            <input id="taskID" placeholder="Enter TaskID"/>
            </label>
            <button type="submit">View Task</button>
        </form>
        
    </div>
    
    </> );
}
 
export default ViewTask;