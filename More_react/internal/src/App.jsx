import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos]=useState([{
    title:"Gym",
    description:"Jao"
  },{
    title:"Homework",
    description:"Do it"
  },{
    title:"Shopping",
    description:"Buy groceries"
  }])
  function addTodo(...args) {
    setTodos([...todos,{
      title:Math.random(),
      description:Math.random()
    }])
  }
  function Todo({title,description}){
    return <div>
      <h1>{title}</h1>

      <p>{description}</p>
    </div>
  }
  function clear(){
    setTodos([]);
  }
  
   return (
    <>
    <button onClick={addTodo}>Add Todo</button>
    {todos.map(todos => <Todo title={todos.title} description={todos.description}/>)}
    <button onClick={clear}>Clear Todos</button>
    
  
    
    
    
    </>
  )
}

export default App
