// components/CustomImage.js
"use client"
import { useState } from 'react';

const CustomImage = ({ src, alt, fallbackSrc, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <img
      src={isLoaded ? src : fallbackSrc}
      alt={alt}
      onLoad={handleImageLoad}
      {...props}
    />
  );
};

export default CustomImage;
