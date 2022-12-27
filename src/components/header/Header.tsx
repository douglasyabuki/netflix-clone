import * as React from 'react';
import Logo from './logo/Logo';
import PrimaryNavigation from './primary-navigation/PrimaryNavigation';
import SecondaryNavigation from './secondary-navigation/SecondaryNavigation';

export default function Header () {
  return (
    <div className="absolute top-0 px-3 max-h-68 w-full flex bg-neutral-900 bg-gradient-to-b from-navbar-color to-transparent-color text-xl text-netflix-white-font">
      <Logo></Logo>
      <PrimaryNavigation></PrimaryNavigation>
      <SecondaryNavigation></SecondaryNavigation>
    </div>
  );
}
