// import logo from './logo.svg';
import './App.css';
import './css/main.css'

import React from 'react'
import Heading from './components/Heading';

const App =  function App() {
  return (
    <div class="grid-container centered">
    <div class="grid-100">
      <div class="contained">
        <div class="grid-100">
          <Heading/>
        </div>

        <ul id="photos">

        </ul>
        </div>
      </div>
    </div>
  )
}



export default App;





