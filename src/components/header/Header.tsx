import * as React from 'react';
import Logo from './logo/Logo';
import PrimaryNavigation from './primary-navigation/PrimaryNavigation';
import SecondaryNavigation from './secondary-navigation/SecondaryNavigation';

export default function Header () {
  return (
    <div className="absolute top-0 z-20 px-2 py-1 h-11 min-w-full flex bg-gradient-to-b from-navbar-color to-transparent-color hover:bg-neutral-900 duration-300 text-sm font-semi-bold text-netflix-white-font text-center sm:px-5 md:h-16 md:py-2 lg:px-12 ">
      <Logo></Logo>
      <PrimaryNavigation></PrimaryNavigation>
      <SecondaryNavigation></SecondaryNavigation>
    </div>
  );
}
