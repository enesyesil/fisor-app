import React from 'react';
import './index.css';
import {Routes,Route,Navigate} from "react-router-dom";
import CarCalculate from './components/car-calculation';
import HomePage from './components/home-page';

function App() {
  return (
    <div> 
    <Routes>
    <Route path="/" element={<Navigate to="/read" />} />
    <Route exact path="/create" element={<CarCalculate/>}/>
    <Route exact path="/read" element={<HomePage/>}/>
    <Route exact path="/edit/:id" element={<CarCalculate/>}/>
  </Routes>
  </div>
  
  );
}

export default App;






