import { useState,useContext } from 'react'

import './App.css'
import { CountContext } from './context';
import { countAtom } from './store/atoms/count';
import { useRecoilState } from 'recoil';


function App() {

  
  return (
    <>
    
      <Count />
    
    <Buttons count={count} setCount={setCount}/>
    
    </>
  )
}

function Count() {
  return (
    <div>
      <CountRenderer/>
    </div>
  );
}

function CountRenderer() {
  const {count}=useContext(CountContext);

  
  
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
