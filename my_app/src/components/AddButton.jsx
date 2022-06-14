import React, {useState} from 'react';
import Button from './Button';
import "./AddButton.css"
const AddButton = ({handleTaskEdition}) => {
    const [inputData, setInputData] = useState("");
    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick=()=>{
        handleTaskEdition(inputData);
        setInputData('');
    }

    return (
        <div className='add-Task-Container'>

            <input
                onChange={handleInputChange}
                value={inputData}
                type="text" className='add-Task-Input'>
            </input>
            <div className='add-Task-button-container'>
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>);
}

export default AddButton;