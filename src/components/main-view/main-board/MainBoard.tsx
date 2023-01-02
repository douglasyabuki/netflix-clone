// Components
import MoreInfo from './buttons/MoreInfo';
import PlayButton from './buttons/PlayButton';

export interface Props {}

export default function MainBoard(props: Props) {
  return (
    <div className="z-0 h-screen w-auto bg-netflix-black">
      <div className="relative top-2/4">
        <div className='flex'>
          <PlayButton></PlayButton>
          <MoreInfo></MoreInfo>
        </div>
      </div>
    </div>
  );
}
