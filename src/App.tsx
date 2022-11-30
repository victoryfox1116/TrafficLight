import React, { useEffect, useState } from "react";
import TrafficLight from "./Components/TrafficLight";
import "./App.css";

const lightDurations = [1000, 2000, 4000];

function App() {
  const [activeColor, setActiveColor] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveColor((prevColor) => (prevColor + 1) % 3);
    }, lightDurations[activeColor]);
    return () => {
      clearTimeout(timer);
    };
  }, [activeColor]);

  return (
    <div className="App">
      <TrafficLight activeColor={activeColor} />
      <TrafficLight activeColor={(activeColor + 2) % 3} />
    </div>
  );
}

export default App;
