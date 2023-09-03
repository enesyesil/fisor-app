import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const HousingCalculate = () => {


    return (
    
        <div className=" bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">FISOR Housing </h1>
    
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">Housing Mortgage Advisor</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">House Price:</label>
                <input
                  type="number"
                  className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-400"
                  placeholder="Enter House Price"
                />
                 <label className="block text-sm font-medium text-gray-700">Interest Rate:</label>
                 <input
                  type="number"
                  className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-400"
                  placeholder="Enter Interest Rate"
                />
                 <div className="mb-4"> 
                 <label className="block text-sm font-medium text-gray-700">Amortization Period:</label>
                 <select className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-400">
                  <option>Select Amortization Period</option>
                  <option>5 years </option>
                  <option>10 years</option>
                  <option>15 years</option>
                  <option>20 years</option>
                  <option>25 years</option>
                  <option>30 years</option>
                </select>
                </div>
                <div className="mb-4"> 
                 <label className="block text-sm font-medium text-gray-700">Payment Frequency:</label>
                 <select className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-400">
                  <option>Select Payment Frequency</option>
                  <option>Weekly </option>
                  <option>Bi-weekly</option>
                  <option>Montly</option>
                  <option>Semi-Monthly</option>
                  
                </select>
               </div>

              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Down Payment:</label>
                <input
                  type="number"
                  className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-400"
                  placeholder="Enter House Price"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full transition duration-300"
              >
                Get Advice
              </button>
            </form>
            <div className="mt-4">
              <h3 className="text-md font-semibold mb-2 text-gray-700">Advisor's Recommendation:</h3>
              <p className="text-gray-600">
                Based on your budget and preferences, we recommend considering the Model B for its affordability and fuel efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    );


}

export default HousingCalculate;