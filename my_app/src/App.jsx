import React, { useEffect, useState } from "react";
import "./App.css"
import Header from './components/Header'
import AddButton from "./components/AddButton";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskDetails from "./components/taskDetail";
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10'
      );
      setTasks(data)
    };
fetchTask();
  }, [])


  const handleTasckClick = (taskId) => {


    const newTasks = tasks.map((task) => {
      if (task.Id === taskId) return {

        ...task, completed: !task.completed

      };
      return task;
    });

    setTasks(newTasks);
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

    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={
            <>
              <AddButton handleTaskEdition={handleTaskEdition} />
              <Tasks
                key={tasks.id}
                tasks={tasks}
                handleTasckClick={handleTasckClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          }
          />
          <Route path="/:taskTitle" exact element={
            <TaskDetails />
          } />
        </Routes>
      </div>
    </Router>

  );
};




export default App;