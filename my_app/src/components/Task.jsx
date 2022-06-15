import React from 'react';
import './Task.css';
import {useNavigate} from 'react-router-dom';
import { CgClose, CgInfo } from 'react-icons/cg';
const Task = ({ task, handleTasckClick, handleTaskDeletion }) => {

    const navigate = useNavigate();

    const handleTaskDetailClick = () =>{
       
        navigate(`/${task.title}`);
    }

    return (
        <div className="task-container" style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
            <div className="task-title" onClick={() => handleTasckClick(task.id)}>{task.title}</div>

            <div className="button-container">
                <button className='see-task-button' onClick={() => handleTaskDetailClick()}><CgInfo /></button>
                <button className='remove-task-button' onClick={() => handleTaskDeletion(task.id)}><CgClose /></button>
            </div>
        </div>
    );

}

export default Task;