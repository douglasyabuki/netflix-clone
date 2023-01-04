import * as React from 'react';

export interface IMoreInfoProps {}

export default function MoreInfo(props: IMoreInfoProps) {
  return (
    <div className="">
      <button className="flex h-5 w-20 text-xsmall items-center justify-center rounded-md bg-netflix-gray font-semibold text-netflix-white-font hover:opacity-80 xs:h-7 xs:w-24 :gap-2 lg:h-14 lg:w-44  lg:text-xl">
        <i className="material-icons text-sm xs:text-lg lg:text-4xl lg:font-extralight">info_outline</i>
        More Info
      </button>
    </div>
  );
}
