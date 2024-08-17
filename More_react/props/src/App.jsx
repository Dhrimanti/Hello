import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context';
import { countAtom } from './store/atoms/count';
import { useRecoilState } from 'recoil';


function App() {
  
  return (
    <>
    <CountContext.Provider value={{ count, setCount }}>
      <Count setCount={setCount}/>
    </CountContext.Provider>
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

function CountRenderer() {
  const {count}=useContext(CountContext);

  
  
  return <div>{count}</div>;
}

function Buttons({count, setCount}) {
  const [count,setCount]=useRecoilState(countAtom);
  

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}



export default App
