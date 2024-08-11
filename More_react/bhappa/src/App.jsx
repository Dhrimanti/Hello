// import Dashboard from './components/dashboard';

import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

const Landing = lazy(() => import('./components/Landing'));
const Dashboard = lazy(() => import('./components/Dashboard'));


import './App.css';

function App() {
  const [count,setCount]=useState(1);
  
  
  return (
    <>
    
    
    <BrowserRouter>
    <Appbar/>
    
    
    <Routes>
      <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
      <Route path="/dashboard" element={<Suspense fallback={"laoding..."}><Dashboard/></Suspense>} />
      
    </Routes>
    </BrowserRouter>
    </>
  );
}
function Appbar(){
  const navigate=useNavigate();
  return <div>
    <button onClick={()=>{
      navigate('/dashboard');
      
    }}/>
    <button onClick={()=>{
      navigate('/');
    }}/>

  </div>
}

export default App;