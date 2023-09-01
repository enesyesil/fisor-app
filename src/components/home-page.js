import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link,  useNavigate } from 'react-router-dom';
import axios from "axios";
import {Routes,Route,Navigate} from "react-router-dom";
import CarCalculate from './car-calculation';

const HomePage = () => {

return(
  
    <div className=" bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex items-start justify-center">
       <nav class="bg-white border-gray-200 dark:bg-gray-900 w-full fixed ">
       <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> 
       <div class="flex md:order-2">
  </div>
  <div class="items-start justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">

    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/home" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/car"  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Car</Link>
      </li>
      <li>
        <Link to="/Housing" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Housing</Link>
      </li>
      <li>
        <Link to="/InvestmentPlan" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Investment</Link>
      </li>
    </ul>
  </div>
       
       </div>

       </nav>
    </div>
    
)




}

export default HomePage;