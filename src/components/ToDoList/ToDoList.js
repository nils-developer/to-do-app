import RemoveTodo from './RemoveTodo';

const ToDoList = ({description, done, docId}) => {
    return (
        <div className='border-solid border-2 border-slate-600 rounded-md flex justify-evenly align-middle py-10 my-5'>
            <div>
                <h2>{description}</h2>
                <p>{done ? 'Done!' : 'Still to do!'}</p>
            </div>
            <RemoveTodo docId={docId}></RemoveTodo>
        </div>
    )
}

export default ToDoList