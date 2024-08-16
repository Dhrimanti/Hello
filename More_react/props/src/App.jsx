import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context';


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <Count count={count}/>
    <Buttons count={count} setCount={setCount}/>
    
    </>
  )
}

function Count({count}) {
  return (
    <div>
      <CountRenderer count={count}/>
    </div>
  );
}

function CountRenderer({count}) {
  
  
  return <div>{count}</div>;
}

function Buttons({count, setCount}) {
  

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}



export default App
