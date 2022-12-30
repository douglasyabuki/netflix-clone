import * as React from 'react';
import Logo from './logo/Logo';
import PrimaryNavigation from './primary-navigation/PrimaryNavigation';
import SecondaryNavigation from './secondary-navigation/SecondaryNavigation';

export default function Header () {
  return (
    <div className="absolute top-0 z-20 px-3 max-h-16 w-full flex bg-gradient-to-b from-navbar-color to-transparent-color hover:bg-neutral-900 duration-300  text-xl text-netflix-white-font text-center">
      <Logo></Logo>
      <PrimaryNavigation></PrimaryNavigation>
      <SecondaryNavigation></SecondaryNavigation>
    </div>
  );
}
