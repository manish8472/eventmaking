import { useEffect, useState } from "react";
import Navigation from "../pages/Navigation";

const ViewAllTask = () => {
  const [taskList, setTaskList] = useState([]); 

  useEffect(() => {
    const allTaks = async () => { 
      try {
        const res = await fetch(
          "http://localhost:3000/api/ethereum/view-all-task", {
            method: "GET",
            headers: {
              "content-type": "application/json"
            },
          }
        );
        const data = await res.json()
        if(data.status===200){
            setTaskList(data.taskList)
            console.log(data.taskList)
        }
      } catch (error) {
        console.log(error);
      }
    };
    allTaks()
  }, []);

  return <>
  <Navigation/>
  <div className="view_all_tasks">
    {taskList.map((task)=> {
      return(
        (task.taskId!=="" && task.name!=="" && task.date!=="") &&
        <div className="view_all_tasks_card"
         key={task.taskId}
         style={task.taskId!=="" && task.name!=="" && task.date!=="" ? {} : {display:"none"}}
         >
          <p>{task.taskId}</p>
          <p>{task.name}</p>
          <p>{task.date}</p>
        </div>
      )
    })}
  </div>
  </>;
};

export default ViewAllTask;
