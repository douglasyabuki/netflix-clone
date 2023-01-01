import React, { useState } from 'react';

export default function SearchTool() {
  const [expandSearch, setExpandSearch] = useState<boolean>(false);
  const onClickHandler: React.MouseEventHandler = () => {
    setExpandSearch(!expandSearch);
  };

  return (
    <div className="hidden relative w-6 min-w-min items-center justify-center sm:flex">
      <i
        role={'button'}
        onClick={onClickHandler}
        className="material-icons absolute left-0 z-30 h-min cursor-pointer text-2xl"
      >
        search
      </i>
      <input
        onMouseLeave={() => setExpandSearch(false)}
        className={
          !expandSearch
            ? 'w-0 opacity-0'
            : 'w-0:before w-full:after opacity-1 relative flex h-8 select-none bg-transparent-color pl-7 text-sm duration-500 ease-out focus:outline-none'
        }
        type="text"
        placeholder="Titles, people, genres"
      ></input>
    </div>
  );
}
