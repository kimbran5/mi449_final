import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WorldClock.css';

function WorldClock(props) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    // Make time API call
    axios.get(`http://worldtimeapi.org/api/timezone/${props.timezone}`)
      .then(response => {
        setTime(response.data.datetime);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.timezone]);

  if (!time) {
    return <div>Loading...</div>;
  }

  const date = new Date(time);

  return (
    <div className="world-clock">
      <div className="city">{props.city}</div>
      <div className="time">{date.toLocaleTimeString()}</div>
    </div>
  );
}

export default WorldClock;