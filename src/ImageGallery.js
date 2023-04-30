import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [
    "https://i.redd.it/asopjkt5dwy91.jpg",
    "https://i.redd.it/cwx9wfwocqsa1.jpg",
    "https://i.redd.it/cu6k8gu40ysa1.jpg",
    "https://i.redd.it/wrukuv7c0ysa1.jpg",
    "https://i.redd.it/wdsz2w51zcsa1.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div className="ImageGallery">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <div className="ImageGallery-controls">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default ImageGallery;
