// Components
import MoreInfo from './buttons/MoreInfo';
import PlayButton from './buttons/PlayButton';

export interface Props {
  onBoard: any;
}

export default function MainBoard({ onBoard }: Props) {
  let firstDate = new Date(onBoard.first_air_date);

  return (
    <div className="relative z-10 h-auto w-screen lg:h-screen">
      <img
        src={`https://image.tmdb.org/t/p/original${onBoard.backdrop_path}`}
        alt=""
        className="relative z-20 h-auto w-screen lg:h-screen"
      />
      <div className="absolute inset-0 z-30 w-screen h-auto lg:h-screen  bg-gradient-to-r from-black to-transparent-color">
        <div className="relative left-4 top-5 z-20 w-1/2 sm:left-5 lg:left-12 lg:top-1/3">
          <h1 className="text-xs font-semibold py-3 xs:py-5 xs:text-lg lg:text-8xl lg:py-4">{onBoard.name}</h1>
          <div className="hidden gap-10 text-xs lg:font-bold lg:flex lg:text-4xl ">
            <h2 className='text-green-700'>{Math.round(onBoard.vote_average * 100) / 100}</h2>
            <h2>{firstDate.getFullYear()}</h2>
            <h2>{onBoard.number_of_seasons}</h2>
          </div>
          <h2 className="text-xsmallest opacity-90 py-4 xs:text-xsmaller lg:text-2xl">{onBoard.overview}</h2>
          <div className="flex gap-1 xs:gap-2 lg:gap-4">
            <PlayButton></PlayButton>
            <MoreInfo></MoreInfo>
          </div>
        </div>
      </div>
    </div>
  );
}
