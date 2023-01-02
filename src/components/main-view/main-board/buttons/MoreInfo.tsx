import * as React from 'react';

export interface IMoreInfoProps {}

export default function MoreInfo(props: IMoreInfoProps) {
  return (
    <div className="">
      <button className="flex h-14 w-44 items-center justify-center rounded-md bg-netflix-gray text-xl font-semibold text-netflix-white-font hover:opacity-80 gap-2">
        <i className="material-icons text-4xl font-extralight">info_outline</i>
        More Info
      </button>
    </div>
  );
}
