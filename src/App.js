import React from 'react';
import './App.css';
import WeatherCard from './WeatherCard';
import WorldClock from './WorldClock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
      </header>
      <div className="content">
        <WeatherCard />
        <WorldClock city="London" timezone="Europe/London" />
        <WorldClock city="Tokyo" timezone="Asia/Tokyo" />
      </div>
    </div>
  );
}

export default App;