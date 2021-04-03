import React from 'react';

export const GifGridItem = ({ image }) => {
  return (
    <div className="gif-image-item animate__animated animate__bounceInDown">
      <img src={image.url} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
};
