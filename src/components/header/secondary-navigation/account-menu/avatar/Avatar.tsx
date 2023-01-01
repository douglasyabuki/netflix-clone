// Hooks
import React, { useState } from 'react';

// Props destructuring
interface Props {
  isActive: boolean;
  onClickHandler: React.MouseEventHandler<HTMLElement>;
}

// Avatar main function
export default function Avatar({ isActive, onClickHandler }: Props) {

  // Returns the avatar image and the rotating arrow to parent AccountMenu.tsx
  return (
    <div onClick={onClickHandler} className="flex h-auto w-12 items-center lg:w-16">
      <img src="/avatar-capybara.png" alt="Account icon" className="cover w-10 rounded" />
      <i
        className={
          isActive
            ? 'material-icons h-auto rotate-0 hidden md:flex text-netflix-white-font duration-300'
            : 'material-icons h-auto rotate-180 hidden md:flex text-netflix-white-font duration-300'
        }
      >
        arrow_drop_down
      </i>
    </div>
  );
}
