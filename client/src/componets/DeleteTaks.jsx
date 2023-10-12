import Navigation from "../pages/Navigation";

const DeleteTaks = ({ state }) => {
  const { contract, account } = state;
  const deleteTask = async (event) => {
    event.preventDefault();
    const taskID = document.querySelector("#taskID").value;
    try {
      const res = await fetch(
        "http://localhost:3000/api/ethereum/delete-task",
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ taskID: taskID }),
        }
      );
      const data = await res.json();
      if (data.status === 200) {
        await contract.methods
          .deleteTask(taskID)
          .send({ from: account });
      } else {
        throw new Error("Task is not deleted");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navigation />
      <div className="delete_task">
        <form onSubmit={deleteTask}>
          <label>
            ID:
            <input id="taskID" placeholder="Enter TaskID" />
            </label>
          <button type="submit">Delete Task</button>
          
        </form>
      </div>
      
    </>
  );
};

export default DeleteTaks;
