import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ToDoList from './components/ToDoList/ToDoList';
import CreateTodo from './components/CreateTodo/CreateTodo';
import { firestore } from './firebase/firebase-config';

function App() {
    const [todos, setTodos] = useState([])
    const fetchTodos = async () => {
        const req = await firestore.collection('todos').get()
        const tempTodos = req.docs.map((todo) => ({...todo.data(), id:todo.id}))
        setTodos(tempTodos)
    }

    useEffect(() => {
        fetchTodos()
    }, []);

  return (
    <div className="App">
        <header className="App-header">
            <NavBar></NavBar>
        </header>
        <h1 className='text-2xl mt-5 font-semibold'>To Do App</h1>
        <CreateTodo setTodos={setTodos} todos={todos}></CreateTodo>
        <div className="flex flex-col justify-center mx-auto w-9/12">
            {
                 todos.map((todo, index) => {
                     return(
                         <ToDoList
                             docId={todo.id}
                             description={todo.description}
                             done={todo.done}
                             key={index}
                         ></ToDoList>
                     )
                 })
            }
        </div>
    </div>
  );
}

export default App;
