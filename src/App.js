import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import ToDo from "./components/ToDo";
import UpdateForm from "./components/UpdateForm";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [toDo, setToDo] = useState([
    { id: 2, title: "Task 2", status: false },
    { id: 1, title: "Task 1", status: false },
  ]);

  // temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //Add task
  const addTask = () => {
    if (newTask) {
      let number = toDo.length + 1;
      let newEntry = { id: number, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => {
      return task.id !== id;
    });
    setToDo(newTask);
  };

  // Mark done
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  // cancelUpdate
  const cancelUpdate = () => {
    setUpdateData("");
  };
  // Update task
  const updateTask = () => {
    let filterRecords = toDo.filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };
  // change task
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  return (
    <div className="container App">
      <h2 className="animation-text">To Do App</h2>

      {updateData ? (
        <>
          {/* Update Task */}
          <UpdateForm
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        </>
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {toDo && toDo.length ? "" : "No Task..."}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
