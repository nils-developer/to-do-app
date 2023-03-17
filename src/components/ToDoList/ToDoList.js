import RemoveTodo from './RemoveTodo';
import UpdateTodo from "./UpdateTodo";

const ToDoList = ({description, done, id}) => {
    return (
        <div className='
            border-solid border-2 border-slate-600 rounded-md
            grid grid-cols-3
            flex items-center align-middle
            py-10 my-5'
        >
            <div>
                <h2>{description}</h2>
                <p>{done ? 'Done!' : 'Still to do!'}</p>
            </div>
            <UpdateTodo id={id}></UpdateTodo>
            <RemoveTodo id={id}></RemoveTodo>
        </div>
    )
}

export default ToDoList