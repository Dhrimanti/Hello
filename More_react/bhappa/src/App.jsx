import Dashboard from './components/dashboard';
import Landing from './components/Landing';
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom';
import { useState } from'react';

import './App.css';

function App() {
  const [count,setCount]=useState(1);
  const navigate=useNavigate();
  
  return (
    <>
    <button onClick={()=>{
      navigate('/dashboard');
      
    }}/>
    <button onClick={()=>{
      window.location.href = '/';
    }}/>
    
    <BrowserRouter>
    
    
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard  />} />
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;