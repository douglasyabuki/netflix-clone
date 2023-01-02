// Components
import MainBoard from './main-board/MainBoard';
import MovieRow from './movie-row/MovieRow';

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
    <div className="z-10 mb-32 block px-2 sm:px-5 lg:px-12">
      <MainBoard></MainBoard>
      <div>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </div>
    </div>
  );
}
