import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link,  useNavigate } from 'react-router-dom';
import axios from "axios";
import {Routes,Route,Navigate} from "react-router-dom";
import CarCalculate from './car-calculation';


const HomePage = () => {

return(
  
    <div className=" bg-slate-700 min-h-screen flex flex-col items-center justify-center space-y-4">
      <div className=' flex flex-col items-start justify-center space-y-4'>
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Decisions.</span> Fisor.</h1>
      <p class="mb-4 text-lg font-normal text-white lg:text-xl justify-center">Let Fisor guide you through the process.</p>
      <p class="mb-4 text-lg font-normal text-white lg:text-xl justify-center space-y-4">Calculate the present value, estimate maintenance costs, and compare vehicles—all while staying within your budget.</p>
      </div>
      <span></span>

    <div className='flex flex-col items-center justify-center '>    
      <button type="button"
               to="/car"
           
           className="bg-gradient-to-r to-emerald-600 from-sky-400 text-white px-8 py-4 rounded hover:bg-blue-600 w-full transition duration-300">
              <Link to="/car"> Get Started</Link>
      </button>
       
      </div>  

   

  </div>
       
       
    
)




}

export default HomePage;