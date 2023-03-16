import { Button } from '../Button/Button';
import { useTodos } from "../../Contexts";
// import { firestore } from '../../firebase/firebase-config';

const submitButton = {
    type: 'submit',
    text: 'Add To-Do'
}

const CreateTodo = () => {
    const [todos, setTodos] = useTodos();

    let todo;
    const createTodo = (e) => {
        e.preventDefault()

        const item = {
            docId: Math.floor(Math.random() * 10000) + 1,
            description: todo,
            done: false
        }
        // firestore.collection('todos').doc().set(item)
        setTodos([
            ...todos,
            item
        ])
    }

    return (
        <form className='my-5' onSubmit={createTodo}>
            <label className='mr-2'>New Todo:</label>
            <input
                className='border-solid border-2 rounded-sm mr-2'
                type={'text'}
                value={todo}
                onChange={(event) => (todo = event.target.value)}
            />
            <Button type={submitButton.type} text={submitButton.text}></Button>
        </form>
    )
}

export default CreateTodo