// Components
import MovieRow   from './movie-row/MovieRow';

// Hooks
import { useEffect, useState } from 'react';

// Utils
import getHomeList from '../../utils/Tmdb';

export default function MainView() {
  // Declaring and setting state
  const [movieList, setMovieList] = useState([]);

  const loadPage = async () => {
    let list = await getHomeList();
    setMovieList(list);
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <div className="z-10">
      {movieList.map((item, key) => (
        <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
      ))}
    </div>
  );
}
