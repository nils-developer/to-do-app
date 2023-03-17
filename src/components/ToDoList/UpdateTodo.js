import { Button } from '../Button/Button'
import {useTodos} from "../../Contexts";
import axios from "axios";

const updateButton = {
    type: 'submit',
    text: 'Update'
}

const UpdateTodo = ({id}) => {
    const [todos] = useTodos();

    const updateTodo = async (e) => {
        e.preventDefault();

        const toDoToUpdate = !todos.find(todo => todo.id === id).done;

        const payload = {
            done: toDoToUpdate
        }

        await axios.patch(
            `http://localhost:8080/items/update/${id}`,
            payload
        ).catch(
            error => console.error(error)
        );
    }

    return (
        <form className='' onSubmit={updateTodo} >
            <Button type={updateButton.type} text={updateButton.text}></Button>
        </form>
    )
}

export default UpdateTodo;