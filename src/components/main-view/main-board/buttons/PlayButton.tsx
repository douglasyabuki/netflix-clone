import * as React from 'react';

export interface IPlayButtonProps {}

export default function PlayButton(props: IPlayButtonProps) {
  return (
    <div className="">
      <button className="text-md h-5 w-14 flex items-center justify-center rounded-md bg-netflix-white-font text-xsmall font-semibold text-netflix-black hover:opacity-80 xs:h-7 xs:w-16 lg:h-14 lg:w-36 lg:gap-2 lg:text-xl">
        <i className="material-icons text-xl xs:text-2xl lg:text-5xl">play_arrow</i>
        Play
      </button>
    </div>
  );
}
