// Const
import { primaryLinks } from './primary-links';

// Hooks
import { useState } from 'react';

// Primary Navigation (routing links) main function
export default function PrimaryNavigation() {

  // Declaring and setting initial value to the hidden links state
  const [isActive, setIsActive] = useState<boolean>(false);

  // Function to show or hide the links menu
  const onClickHandler = () => {
    setIsActive(!isActive);
  };

  // Maps the list of links into a HTML List Element
  const listLinks = primaryLinks.map((link) => (
    <li className="lg:flex-box px-3 hover:opacity-75" key={link.id}>
      <a href={link.link}>{link.name}</a>
    </li>
  ));

  // Returns the links to be rendered by Header.tsx
  return (
    <div className="container m-auto mx-0 flex flex-wrap items-center justify-between px-4">
      <ul className="block lg:flex">
        <li className="center inline-flex items-center lg:hidden">
          <a
            role="button"
            className="relative text-xsmall font-medium sm:text-base"
            onClick={onClickHandler}
          >
            Browse
          </a>
          <i
            className={
              isActive
                ? 'material-icons h-auto rotate-0 text-netflix-white-font duration-300'
                : 'material-icons h-auto rotate-180 text-netflix-white-font duration-300'
            }
          >
            arrow_drop_down
          </i>
        </li>
        {isActive ? (
          <div
            className="container absolute left-0 mt-4 flex h-60 w-fit flex-col items-center justify-between border-t-2 border-t-netflix-white-font bg-netflix-black py-4 px-24 opacity-80"
            onMouseLeave={() => setIsActive(false)}
          >
            {listLinks}
          </div>
        ) : (
          <div className="2xl:text-md hidden text-xs lg:flex xl:text-sm">{listLinks}</div>
        )}
      </ul>
    </div>
  );
}
