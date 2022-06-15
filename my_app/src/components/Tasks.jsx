import React from 'react';
import Task from "./Task"

const Tasks = ({ tasks, handleTasckClick, handleTaskDeletion }) => {
    return (
        <>
            {tasks.map((task) => (<Task key={task.id}
                task={task}
                handleTasckClick={handleTasckClick}
                handleTaskDeletion={handleTaskDeletion}
            />))}
        </>
    );
};

export default Tasks;