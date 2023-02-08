import React from 'react';

import { Button } from '../Button/Button';

const deleteButton = {
    type: 'submit',
    text: 'Delete'
}

export default function ToDoList({description, done})
{
    return (
        <div className='toDo'>
            <div>
                <h2>{description}</h2>
                <p>{done ? 'Done!' : 'Still to do!'}</p>
            </div>
            <form>
                <Button type={deleteButton.type} text={deleteButton.text}></Button>
            </form>
        </div>
    )
}