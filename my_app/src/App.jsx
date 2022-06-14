import React, { useState } from "react";
import "./App.css"
import Tasks from "./components/Tasks";
// let message = "Hello, world!";





const App = () => {

  const [task, setTask] = useState([
    {
      id: "1",
      title: "Hello, world",
      completed: false,
    },
    {
      id: "2",
      title: "Stud programmation",
      completed: false,
    },
    {
      id: "3",
      title: "Drink water",
      completed: true,
    }
  ]);

  return (
    <>
      <div className="container">
        <p className="pContainer"><Tasks tasks={task} /></p>
        
      </div>
    </>
  );
};

export default App;