import { useState,useContext } from 'react'

import './App.css'
import { CountContext } from './context';
import { countAtom } from './store/atoms/count';
import { useRecoilState } from 'recoil';


function App() {

  
  return (
    <>
    
      <Count />
    
    
    
    </>
  )
}

function Count() {
  return (
    <div>
      <CountRenderer/>
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count=useRecoilValue(countAtom); 

  
  
  return <div>{count}</div>;
}

function Buttons() {
  const count=0;
  
  

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}



export default App
