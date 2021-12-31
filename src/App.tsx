import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  useParams
} from "react-router-dom";

import './App.css';
const Hug = require('./assets/hug.png')
const M3lsh = require('./assets/m3lsh.png')


function App() {
  return (
    <div className="App">
      <div className='container'> 
      <img src={Hug} alt="hug" className='image' />
        <h1>hug me</h1>
      </div>

      <div className='container'> 
      <img src={M3lsh} alt="hug" className='image' />
        <h1>motivated</h1>
      </div>
    </div>
  );
}

export default App;
