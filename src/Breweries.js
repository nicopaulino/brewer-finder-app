import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'


function Breweries() {

  const [barsList, setBarsList] = useState([]);


  const generateBars = () => {
 
    axios.get('https://api.openbrewerydb.org/breweries?by_city=new_orleans')
        .then(response => setBarsList(response.data))
        .then(console.log(barsList));

      };

  return (
  
    <div className="App">
      <header className="App-header">
        <div>Hello World</div>
        <button onClick={() => generateBars()}>Get Bars</button>
            <div>
                {barsList.map(bar => {
                    return (
                        <div>
                            <div>Bar: {bar.name}</div>
                            <div>Type: {bar.brewery_type}</div>
                            <div>Address: {bar.street} </div>
                            <a target="_blank" href={`${bar.website_url}`}>Website</a>
                        </div>
                    )
                })}
            </div>
        
      </header>
    </div>
  );
}

export default Breweries;
