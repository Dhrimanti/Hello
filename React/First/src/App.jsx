import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Gym",
      desc: "Jao",
      completed: false
    },
    {
      title: "Homework",
      desc: "Do it",
      completed: false
    }
  ]);
  function addTodos(){
    setTodos(...todos,{
      title: "New Todo",
      desc: "Add this",
      
    })
  }

  return (
    <div>
      <button type="button" onClick={addTodos}>Add Todo</button>
      {todos.map((todo) => (
        <Todo title={todo.title} desc={todo.desc} />
      ))}
    </div>
  )
}

function Todo(props) {
  function toggleCompleted() {
    // Function to toggle completed status
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}

export default App
