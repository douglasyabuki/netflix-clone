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
    <li className="opacity-75 hover:opacity-100 lg:flex-box px-3" key={link.id}>
      <a href={link.link}>{link.name}</a>
    </li>
  ));

  return (
    <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
      <ul className="text-sm block lg:flex">
        <li className="opacity-75 hover:opacity-100 center inline-flex lg:hidden">
          <a role="button" className="relative" onClick={onClickHandler}>
            Browse
          </a>
          <i
            className={
              isActive
                ? 'material-icons h-auto rotate-0 duration-300 text-netflix-white-font'
                : 'material-icons h-auto rotate-180 duration-300 text-netflix-white-font'
            }
          >
            arrow_drop_down
          </i>
        </li>
        {isActive ? (
          <div
            className="container absolute left-0 border-t-4 my-4 border-t-netflix-white-font flex py-4 h-60 w-fit flex-col items-center justify-between bg-black px-24"
            onMouseLeave={() => setIsActive(false)}
          >
            {listLinks}
          </div>
        ) : (
          <div className="hidden lg:flex">{listLinks}</div>
        )}
      </ul>
    </div>
  );
}
