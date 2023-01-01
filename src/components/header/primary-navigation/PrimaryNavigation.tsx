// Const
import { primaryLinks } from './primary-links';

// Hooks
import React, { useState } from 'react';

export default function PrimaryNavigation() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setIsActive(!isActive);
  };

  const listLinks = primaryLinks.map((link) => (
    <li className="lg:flex-box px-3 hover:opacity-75" key={link.id}>
      <a href={link.link}>{link.name}</a>
    </li>
  ));

  return (
    <div className="container mx-0 m-auto flex flex-wrap items-center justify-between px-4">
      <ul className="block lg:flex">
        <li className="center inline-flex lg:hidden">
          <a role="button" className="relative text-xsmall font-medium sm:text-base" onClick={onClickHandler}>
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
            className="container absolute left-0 mt-4 flex h-60 w-fit flex-col items-center justify-between border-t-2 border-t-netflix-white-font bg-netflix-black opacity-80 py-4 px-24"
            onMouseLeave={() => setIsActive(false)}
          >
            {listLinks}
          </div>
        ) : (
          <div className="hidden text-xs lg:flex xl:text-sm 2xl:text-md">{listLinks}</div>
        )}
      </ul>
    </div>
  );
}
