import './components/Todo/todo.css'
import { DataComponent } from './components/Todo/TodoData'
import { NewComponent } from './components/Todo/TodoNew'
import reactLogo from './assets/react.svg'

const App = () => {
  const name = "Phuong"
  const age = 23
  const data = {
    address: "Da Nang",
    country: "Viet Nam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <NewComponent />
      <DataComponent
        name={name}
        age={age}
        data={data}
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>

    </div>
  )
}

export default App
