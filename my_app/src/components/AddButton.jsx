import React from 'react';
import Button from './Button';
import "./AddButton.css"
const AddButton = () => {
    return (
        <div className='add-Task-Container'>

            <input type="text" className='add-Task-Input'></input>
            <div className='add-Task-button-container'>
                <Button>Adicionar</Button>
            </div>
        </div>);
}

export default AddButton;