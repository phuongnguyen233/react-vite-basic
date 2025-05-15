import './todo.css'
import DataComponent from './TodoData'
import NewComponent from './TodoNew'
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'

const TodoApp = () => {
    const [TodoList, setTodoList] = useState([
        // { id: 1, name: "Learning React" },
        // { id: 2, name: "Watching Youtube" }
    ])
    const addNewTodo = (name) => {
        const newTodo = {
            id: RandomIntFromInterval(1, 1000000),
            name: name
        }
        setTodoList([...TodoList, newTodo])

    }
    const RandomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const deleteTodo = (id) => {
        const newTodo = TodoList.filter(item => item.id !== id)
        setTodoList(newTodo)
    }
    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <NewComponent
                addNewTodo={addNewTodo}
            />
            {TodoList.length > 0 ?
                <DataComponent
                    TodoList={TodoList}
                    deleteTodo={deleteTodo}
                />
                :
                <div className="todo-image">
                    <img src={reactLogo} className="logo" />
                </div>
            }
        </div>
    )
}
export default TodoApp