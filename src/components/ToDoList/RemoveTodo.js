import { Button } from '../Button/Button';
import { useTodos } from "../../Contexts";
import axios from "axios";

const deleteButton = {
    type: 'submit',
    text: 'Delete'
}

const RemoveTodo = ({id}) => {
    const [todos] = useTodos();
    const removeTodo = async (e) => {
        e.preventDefault()

        const  deleteTodoWithId = todos.find(todo => todo.id === id)?.id;

        await axios.delete(
            `http://localhost:8080/items/delete/${deleteTodoWithId}`
        ).catch(
            error => console.error(error)
        );
    }
    return (
        <form className='flex justify-center' onSubmit={removeTodo}>
            <Button type={deleteButton.type} text={deleteButton.text}></Button>
        </form>
    )
}

export default RemoveTodo