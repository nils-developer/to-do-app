import { Button } from '../Button/Button';
import { useTodos } from "../../Contexts";
// import { firestore } from '../../firebase/firebase-config';

const deleteButton = {
    type: 'submit',
    text: 'Delete'
}

const RemoveTodo = ({docId}) => {
    const [todos, setTodos] = useTodos();
    const removeTodo = (e) => {
        e.preventDefault()

        // return firestore.collection('todos').doc(docId).delete().then(() => {
        //     console.log('Document successfully removed!');
        // }).catch((error) => {
        //     console.error('Error removing document: ', error);
        // })

        const filteredTodos = todos.filter(todo => docId !== todo.docId);

        setTodos(filteredTodos);
    }
    return (
        <form className='flex justify-center' onSubmit={removeTodo}>
            <Button type={deleteButton.type} text={deleteButton.text}></Button>
        </form>
    )
}

export default RemoveTodo