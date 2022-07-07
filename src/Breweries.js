import React, { useEffect, useState, useCallback } from 'react';
import './Breweries.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '18rem',
  height: '18rem'
};




function Breweries() {

  const [barsList, setBarsList] = useState([]);
  const [map, setMap] = useState(null)
  const [center, setCenter] = useState({
    lat: 29.9557185,
    lng: -90.0639242
  })

  // const getBrews = () => axios.get(`/api/breweries`);

  // const [brews, setBrews] = useState([]);


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  })

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])


  useEffect(() => {
    axios.get('https://api.openbrewerydb.org/breweries?by_city=new_orleans')
        .then(response => setBarsList(response.data))
        .then(console.log(barsList));

  }, []);

  // const generateBars = () => {
  //   axios.get('https://api.openbrewerydb.org/breweries?by_city=new_orleans')
  //       .then(response => setBarsList(response.data))
  //       .then(console.log(barsList));
  //     };

  return (
  
    <div className="Breweries-page">
      <header className="Breweries-header">
        <h1>Breweries in New Orleans</h1>
        {/* <button onClick={() => generateBars()}>Get Bars</button> */}
        <Accordion style={{ width: '50rem', color: 'black' }}>
                {barsList.map((bar, i) => {
                    return (
                            <Accordion.Item eventKey={i} key={i}>
                            <Accordion.Header onClick={() => setCenter({lat: parseFloat(bar.latitude), lng: parseFloat(bar.longitude)})}>{bar.name}</Accordion.Header>
                            <Accordion.Body style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                              <div className="Brewery-info">
                                <div>Brewery Type: {bar.brewery_type}</div>
                                <div>Address: {bar.street}</div>
                                <div>{`${bar.city}, ${bar.state} ${bar.postal_code}`}</div>
                                {bar.website_url ? <a target="_blank" href={`${bar.website_url}`}>Website</a> : null}
                              </div>
                                { isLoaded && bar.latitude ? (
                                    <GoogleMap
                                      mapContainerStyle={containerStyle}
                                      center={center}
                                      zoom={19}
                                      onLoad={onLoad}
                                      onUnmount={onUnmount}
                                    >
                                      <Marker position={center}/>
                                      { /* Child components, such as markers, info windows, etc. */ }
                                      <></>
                                    </GoogleMap>
                                ) : null }
                            </Accordion.Body>
                            </Accordion.Item>

                    )
                })}
            </Accordion>
        
      </header>
    </div>
  );
}

export default Breweries;
