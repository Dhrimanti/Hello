import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos]=useState([]);

  useEffect(() =>{
    fetch("https://sum-server.100devs.com/todos")
    .then(async (response) =>{
      const json=await response.json();
      setTodos(json.todos)
    })
  })
  return (
    <>
    <h1>{todos.title}</h1>
    <p>{todos.description}</p>
    </>
        
  );
}

export default App
