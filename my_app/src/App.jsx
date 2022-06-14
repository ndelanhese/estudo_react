import React, { useState } from "react";
import "./App.css"
import Header from '.components/Header'
import AddButton from "./components/AddButton";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [tasks, setTasks] = useState([
  ]);
  const handleTasckClick = (taskId) => {
    const newTask = tasks.map(task => {
      if (task.Id === taskId) return {
        ...task, completed: !task.completed
      };
      return task;
    });
    setTasks(newTask);
  };
  const handleTaskDeletion = (taskId) => {
    const newTask = tasks.filter(task => task.Id !== taskId)
    setTasks(newTask);
  }
  const handleTaskEdition = (taskTitle) => {
    const newTask = [
      ...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },];
    setTasks(newTask);
  }
  return (
    <>
      <div className="container">
      <Header></Header>
        <AddButton handleTaskEdition={handleTaskEdition} />
        <Tasks
          tasks={tasks}
          handleTasckClick={handleTasckClick}
          handleTaskDeletion={handleTaskDeletion}
        />

      </div>
    </>
  );
};

export default App;