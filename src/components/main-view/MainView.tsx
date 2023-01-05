// Const
import { bannedOriginalsIds } from './banned-ids/banned-originals-ids';

// Components
import MainBoard from './main-board/MainBoard';
import MovieRow from './movie-row/MovieRow';

// Hooks
import { useEffect, useState } from 'react';

// Utils
import { getHomeList, getDetails, getVideosDetails } from '../../utils/Tmdb';
import { shuffleNumber } from '../../utils/shuffle-number';

// MainView main function
export default function MainView() {

  // Declaring and setting states
  const [movieList, setMovieList] = useState([]);
  const [onBoard, setOnBoard] = useState(null);

  // Defining a function to fetch data using Tmdb.ts functions
  const loadPage = async () => {

    // Sets the state of the movie rows
    let list = await getHomeList();
    let originals = list.filter((item) => item.slug === 'originals');
    setMovieList(list);

    // Since there is a bad fetched item, it will be filtered from fetched original series
    let alteredOriginals = originals[0].items.results.filter(result => !bannedOriginalsIds.includes(result.id));
    let originalChosen = shuffleNumber(alteredOriginals.length);
    let chosenId = alteredOriginals[originalChosen].id;

    // Fetching details to be treated by MainBoard.tsx
    let chosen = await getDetails(chosenId);
    setOnBoard(chosen);
    console.log(chosenId)
    console.log(chosen);
  };

  // Triggers the fetch and state functions as soon as the page loads
  useEffect(() => {
    loadPage();
  }, []);

  // Returns the App's main page to App.tsx
  return (
    <div className="relative z-0 mb-32">
      <div className="relative items-center">
        {onBoard ? <MainBoard onBoard={onBoard}></MainBoard> : null}
      </div>
      <div className="group relative -top-4 z-20 items-center bg-gradient-to-b from-transparent-color to-netflix-black backdrop-blur-md lg:px-12">
        {movieList
          ? movieList.map((item, id) => (
              <MovieRow key={id} title={item.title} items={item.items}></MovieRow>
            ))
          : null}
      </div>
    </div>
  );
}
