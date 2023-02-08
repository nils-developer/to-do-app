import React from 'react';
import { FormInput } from './FormInput';
import { Button } from '../Button/Button';

const submitButton = {
    type: 'submit',
    text: 'Add To-Do'
}

const submit = (e) => {
    e.preventDefault();
}

export default function Form()
{
    return (
        <form className='form' onSubmit={submit}>
            <FormInput labelText='New To-Do:' type='text'></FormInput>
            <Button type={submitButton.type} text={submitButton.text}></Button>
        </form>
    )
}