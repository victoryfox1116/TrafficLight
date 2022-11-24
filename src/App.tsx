import React from 'react';
import TrafficLight from './Components/TrafficLight';
import './App.css';

function App() {
  return (
    <div className="App">
      <TrafficLight initTurnOnLightNumber = {0} />
      <TrafficLight initTurnOnLightNumber = {1} />
    </div>
  );
}

export default App;
