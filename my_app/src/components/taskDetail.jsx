import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from './Button';
import './taskDetail.css';
const TaskDetails = () => {
    const params = useParams();
   
    const navigate =useNavigate();

    const handleBackButtonClick = () =>{
       navigate(-1);
    }

    return (
    <>
        <div className='back-button-container'>
            <Button onClick={handleBackButtonClick}>Voltar</Button>
        </div>

        <div className="task-detail-container">
            <h2 className="h2-component">{params.taskTitle}</h2>
            <p>lorem15a lorem15alorem15alorem15alorem15alorem15alorem15a
                lorem15a</p>
        </div>

    </>);
}

export default TaskDetails;