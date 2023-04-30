import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';
import CurrentTime from './CurrentTime';
import NewsFeed from './NewsFeed';
import ImageGallery from './ImageGallery';

function App() {
  const [name, setName] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const enteredName = prompt("Please enter your name:");
    if (enteredName) {
      setName(enteredName);
    }
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      setTimeOfDay('morning');
    } else if (currentTime < 18) {
      setTimeOfDay('afternoon');
    } else {
      setTimeOfDay('night');
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Good {timeOfDay}, {name}!</h1>
      </header>
      <CurrentTime />
      <ImageGallery />
      <div className="left-column">
        <p>Welcome, {name} to your personal dashboard!</p>
        <p>Stay up-to-date with the latest news, stay on schedule with the current time, and plan your day with the latest weather updates.</p>
        <p>Our dashboard is designed to be informative and easy to use, so feel free to take your time and explore all the features. We hope you find everything you need and more!</p>
      </div>
      <div className="right-column">
        <p className="sidenote">Change the wallpaper using the "Prev" and "Next" buttons!</p>
        <p className="sidenote">News source: New York Times</p>
      </div>

      <div className="content">
        <WeatherCard />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;

