// Components
import MovieCard from './movie-card/MovieCard';
import SlideLeft from './slide-left/SlideLeft';

// Hooks
import { useRef, useState } from 'react';
import SlideRight from './slide-right/SlideRight';

// Props destructuring
export interface Props {
  title: string;
  items: any;
}

// MovieRow main function
export default function MovieRow({ title, items }: Props) {

  // Setting hooks
  const [isMoved, setIsMoved] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  // Defining the handler of clicks on slide buttons
  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Returns a row of a specific category of movies/series to MainView.tsx in a Carousel
  return (
    <div className="h-auto space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative px-4">
        <SlideLeft onClickHandler={() => handleClick('left')}></SlideLeft>
        <SlideRight onClickHandler={() => handleClick('right')}></SlideRight>
        <div
          ref={rowRef}
          className="flex overflow-x-scroll container xs:scrollbar-hide   md:p-2  "
        >
          {items.results.map((item) => (
            <MovieCard item={item} key={item.id}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
}
