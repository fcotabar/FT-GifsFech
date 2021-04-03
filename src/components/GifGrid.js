import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { Loading } from './Loading';

export const GifGrid = ({ category }) => {
  const { data: gridImages, loading } = useFetchGifs(category);

  console.log(gridImages);

  return (
    <div className="gif-category">
      <h2>{category}</h2>
      {loading && <Loading />}
      <div className="gif-grid">
        {gridImages.map((img) => (
          <GifGridItem key={img.id} image={img} />
        ))}
      </div>
    </div>
  );
};
