import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Naruto']);

  return (
    <div>
      <h1>Gif Expert</h1>
      <AddCategory setCategory={setCategories} />
      <hr />
      <section>
        {categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
      </section>
    </div>
  );
};
