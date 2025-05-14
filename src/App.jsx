import './components/Todo/todo.css'
import { DataComponent } from './components/Todo/TodoData'
import { NewComponent } from './components/Todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {
  const name = "Phuong"
  const age = 23
  const data = {
    address: "Da Nang",
    country: "Viet Nam"
  }
  const [TodoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" }
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

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <NewComponent
        addNewTodo={addNewTodo}
      />
      <DataComponent
        name={name}
        age={age}
        data={data}
        TodoList={TodoList}
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>

    </div>
  )
}

export default App
