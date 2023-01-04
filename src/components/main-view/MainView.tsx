// Components
import MainBoard from './main-board/MainBoard';
import MovieRow from './movie-row/MovieRow';

// Hooks
import { useEffect, useState } from 'react';

// Utils
import { getHomeList, getDetails, getVideosDetails } from '../../utils/Tmdb';
import { shuffleNumber } from '../../utils/shuffle-number';

export default function MainView() {
  // Declaring and setting state
  const [movieList, setMovieList] = useState([]);
  const [onBoard, setOnBoard] = useState(null);

  const loadPage = async () => {
    let list = await getHomeList();
    setMovieList(list);
    console.log(list);

    let originals = list.filter((item) => item.slug === 'originals');
    let originalChosen = shuffleNumber(3);
    let chosenId = originals[0].items.results[originalChosen].id;
    let chosen = await getDetails(chosenId);
    setOnBoard(chosen);
    console.log(chosen);
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <div className="relative z-0 mb-32">
      <div className="relative items-center">
        {onBoard ? <MainBoard onBoard={onBoard}></MainBoard> : null}
        </div>
      <div className="relative items-center group">
        {movieList !== ([])
          ? movieList.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
            ))
          : null}
      </div>
    </div>
  );
}
