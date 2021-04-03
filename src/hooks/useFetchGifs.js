import { useEffect, useState } from 'react';
import { fetchGif } from '../helpers/fetchGif';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    setTimeout(() => {
      fetchGif(category)
        .then((imgs) =>
          setState({
            loading: false,
            data: [...imgs],
          })
        )
        .catch((err) => console.error(err));
    }, 2000);
  }, [category]);

  return state;
};
