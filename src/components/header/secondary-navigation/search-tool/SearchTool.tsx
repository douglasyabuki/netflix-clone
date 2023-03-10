// Hooks
import React, { useState, useRef } from 'react';

// Search Tool main function
export default function SearchTool() {
  // Declaring state and setting its initial value
  const [expandSearch, setExpandSearch] = useState<boolean>(false);
  const timeout = useRef(null);

  // Whenever the user clicks the icon, the state of expandSearch will be updated
  const onClickHandler: React.MouseEventHandler = () => {
    setExpandSearch(!expandSearch);
  };

  // Function to set a timer to hide menu onMouseLeave
  const onMouseLeaveHandler = () => {
    timeout.current = setTimeout(() => {
      setExpandSearch(false);
    }, 500);
  };

  // Function to reset the timer onMouseEnter
  const onMouseEnterHandler = () => {
    clearTimeout(timeout.current);
  };

  // Returns the icon(button) to SecondaryNavigation.tsx
  return (
    <div className="relative hidden w-6 min-w-min items-center justify-center sm:flex">
      <i
        role={'button'}
        onClick={onClickHandler}
        className="material-icons absolute left-0 z-30 h-min cursor-pointer text-2xl"
      >
        search
      </i>
      <input
        onMouseLeave={onMouseLeaveHandler}
        onMouseEnter={onMouseEnterHandler}
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
