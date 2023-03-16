import { Button } from '../Button/Button';
import { useTodos } from "../../Contexts";
import axios from "axios";

const deleteButton = {
    type: 'submit',
    text: 'Delete'
}

const RemoveTodo = ({id}) => {
    const [todos, setTodos] = useTodos();
    const removeTodo = (e) => {
        e.preventDefault()

        const filteredTodos = todos.filter(todo =>  id !== todo.id);
        const deleteTodoId = todos.filter(todo => id === todo.id).map(todo => todo.id)[0]

        axios.delete(`http://localhost:8080/items/delete/${deleteTodoId}`)
            .then(
                () => console.log(`Deleted object with id: ${deleteTodoId}`)
            )
            .catch(
                error => console.error(error)
            )

        setTodos(filteredTodos);
    }
    return (
        <form className='flex justify-center' onSubmit={removeTodo}>
            <Button type={deleteButton.type} text={deleteButton.text}></Button>
        </form>
    )
}

export default RemoveTodo