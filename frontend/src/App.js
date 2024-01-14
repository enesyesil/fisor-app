import React from 'react';
import './index.css';
import {Routes,Route,Navigate} from "react-router-dom";
import CarCalculate from './components/car-calculation';
import HomePage from './components/home-page';
import HousingCalculate from './components/housing-calculation';

function App() {
  return (
    <div> 
    <Routes>
    <Route path="/" element={<Navigate to="/home"/>} />
    <Route exact path="/car" element={<CarCalculate/>}/>
    <Route exact path="/home" element={<HomePage/>}/>
    <Route exact path="/housing" element={<HousingCalculate/>}/>
  </Routes>
  </div>
  
  );
}

export default App;






