import * as React from 'react';

export interface IPlayButtonProps {}

export default function PlayButton(props: IPlayButtonProps) {
  return (
    <div className="">
      <button className="flex h-14 w-36 rounded-md bg-netflix-white-font text-xl font-semibold text-netflix-black hover:opacity-80 items-center justify-center gap-2">
        <i className="material-icons text-5xl">play_arrow</i>
        Play
      </button>
    </div>
  );
}
