import React, { useState } from 'react';

const WorldClock = () => {
  const [city, setCity] = useState('');
  const [time, setTime] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://worldclockapi.com/api/json/utc/now?location=${encodeURIComponent(city)}`);
    const data = await response.json();
    setTime(data.currentDateTime);
  };

  return (
    <div>
      <h2>Time Finder</h2>
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input type="text" value={city} onChange={handleCityChange} />
        </label>
        <button type="submit">Find Time</button>
      </form>
      {time && (
        <p>{`${city}: ${time}`}</p>
      )}
    </div>
  );
};

export default WorldClock;