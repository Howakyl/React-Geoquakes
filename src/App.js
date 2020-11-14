import React from 'react';
import GoogleMap from './components/GoogleMap';
import Earthquakes from './components/Earthquakes';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="mapContainer">
        <GoogleMap />
      </div>
      <div className="quakeContainer">
        <h1>Earthquakes from the past week:</h1>
        <Earthquakes />
      </div>
    </div>
  );
}

export default App;
