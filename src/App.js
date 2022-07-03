import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import Map from './Map';
import Breweries from './Breweries';


function App() {

  const [flag, setFlag] = useState(false);

  return (
  
    <div className="App">
      <header className="App-header">
        {flag ? 
        <Map/> : 
        <Breweries/>
        }
      </header>
    </div>
  );
}

export default App;
