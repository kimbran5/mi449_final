import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [time, setTime] = useState('');

  const getTime = () => {
    const date = new Date();
    setTime(date.toLocaleTimeString());
  };

  useEffect(() => {
    const successCallback = async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const timezoneApiUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=RMQO98RDHMXE&format=json&by=position&lat=${latitude}&lng=${longitude}`;
      try {
        const response = await fetch(timezoneApiUrl);
        const data = await response.json();
        const timezoneOffset = data.gmtOffset;
        const date = new Date();
        const utcTimestamp = date.getTime() + (date.getTimezoneOffset() * 60000);
        const localTimestamp = utcTimestamp + (timezoneOffset * 1000);
        setTime(new Date(localTimestamp).toLocaleTimeString());
      } catch (error) {
        console.error(error);
      }
    };

    const errorCallback = (error) => {
      console.error(error);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      <p>The current time is {time}.</p>
    </div>
  );
};

export default CurrentTime;
