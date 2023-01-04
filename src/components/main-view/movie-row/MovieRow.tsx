// Components
import MovieCard from './movie-card/MovieCard';

// Hooks
import { useRef, useState } from 'react';

// Props destructuring
export interface Props {
  title: string;
  items: any;
}

export default function MovieRow({ title, items }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-auto space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <i
          className={`material-icons absolute top-0 bottom-0 left-2 z-40 m-auto h-full scale-90 w-4 cursor-pointer text-center bg-netflix-black opacity-0 transition hover:scale-100 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          role={'button'}
          onClick={() => handleClick('left')}
        >
          arrow_back_ios
        </i>
        <div
          ref={rowRef}
          className="flex max-w-6xl items-center space-x-0.5 overflow-x-auto xs:scrollbar-hide md:space-x-2.5
          md:p-2"
        >
          {items.results.map((item) => (
            <MovieCard item={item}></MovieCard>
          ))}
        </div>

        <i
          className="material-icons absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          role={'button'}
          onClick={() => handleClick('right')}
        >
          arrow_forward_ios
        </i>
      </div>
    </div>
  );
}
