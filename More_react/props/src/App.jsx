import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context';

function App() {
  const [count, setCount] = useState(1);
  

  return (
    <><CountContext.Provider value={{ count, setCount }}>
    <Count />
    <Buttons />
  </CountContext.Provider>
    </>
  )
}

function Count() {
  return (
    <div>
      <CountRenderer />
    </div>
  );
}
function CountRenderer() {
  const { count } = useContext(CountContext);
  
  return <div>{count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}



export default App
