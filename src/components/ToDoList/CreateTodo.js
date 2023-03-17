import { useRef } from "react";
import { Button } from '../Button/Button';
import { useTodos } from "../../Contexts";
import axios from "axios";

const submitButton = {
    type: 'submit',
    text: 'Add To-Do'
}


const CreateTodo = () => {
    const inputRef = useRef(null);

    const createTodo = async (e) => {
        e.preventDefault()

        let item = {
            description: inputRef.current.value,
            done: false
        }

        await axios.post(
            "http://localhost:8080/items/create",
            item
        ).catch(
            error => console.error(error)
        );

        inputRef.current.value = '';
    }


    return (
        <form className='my-5' onSubmit={createTodo}>
            <label className='mr-2'>New Todo:</label>
            <input
                className='border-solid border-2 rounded-sm mr-2'
                type={'text'}
                ref={inputRef}
            />
            <Button type={submitButton.type} text={submitButton.text}></Button>
        </form>
    )
}

export default CreateTodo