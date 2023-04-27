import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';
import CurrentTime from './CurrentTime';
import NewsFeed from './NewsFeed';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    const enteredName = prompt("Please enter your name:");
    if (enteredName) {
      setName(enteredName);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, {name}!</h1>
      </header>
      <div className="left-column">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id metus non elit pharetra aliquet. Sed at sapien sit amet leo convallis venenatis sit amet et nunc. Quisque ac massa in erat blandit dignissim.</p>
        <p>Duis in magna in quam hendrerit mollis. Nam at neque turpis. Integer ac pellentesque quam. Donec quis fermentum dolor. Fusce quis arcu ipsum.</p>
      </div>
      <div className="right-column">
        <p className="sidenote">This is a sidenote.</p>
        <p className="sidenote">Another sidenote.</p>
      </div>

      <div className="content">
        <WeatherCard />
        <CurrentTime />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;

