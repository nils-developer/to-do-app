import { Button } from '../Button/Button';
import { useTodos } from "../../Contexts";
import axios from "axios";

const submitButton = {
    type: 'submit',
    text: 'Add To-Do'
}


const CreateTodo = () => {
    const [todos, setTodos] = useTodos();

    let newTodoDescription;

    const createTodo = (e) => {
        e.preventDefault()

        let item = {
            description: newTodoDescription,
            done: false
        }

        console.log(item)

        axios.post(
            "http://localhost:8080/items/create",
            item
        ).then(
            () => console.log(`Created item ${item}`)
        ).catch(
            error => console.error(error)
        );

        setTodos([
            ...todos,
            item
        ]);
    }

    return (
        <form className='my-5' onSubmit={createTodo}>
            <label className='mr-2'>New Todo:</label>
            <input
                className='border-solid border-2 rounded-sm mr-2'
                type={'text'}
                value={newTodoDescription}
                onChange={event => (newTodoDescription = event.target.value)}
            />
            <Button type={submitButton.type} text={submitButton.text}></Button>
        </form>
    )
}

export default CreateTodo