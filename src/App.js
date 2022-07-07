import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from './OldMap';
import Breweries from './Breweries';
// import Breweries from './Brews';
import Brewery from './Brewery';


function App() {

  const [flag, setFlag] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <Breweries/>
      </header>
    </div>
  //   <BrowserRouter>
  //     {/* <header>
  //       <Header></Header>
  //     </header> */}
  //     <Routes>
  //       <Route path="/" element={<Breweries/>} />
  //       <Route path="/brewery" element={<Brewery/>} />
  //     </Routes>
  //   </BrowserRouter>
  // );
)}

export default App;
