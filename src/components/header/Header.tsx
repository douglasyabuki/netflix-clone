// Components
import Logo from './logo/Logo';
import PrimaryNavigation from './primary-navigation/PrimaryNavigation';
import SecondaryNavigation from './secondary-navigation/SecondaryNavigation';

// Header main function
export default function Header() {

  // Returns the whole header to App.tsx
  return (
    <div className="font-semi-bold fixed top-0 z-20 flex h-11 min-w-full bg-gradient-to-b from-navbar-color to-transparent-color px-2 py-1 text-center text-sm text-netflix-white-font duration-300 hover:bg-neutral-900 sm:px-5 md:h-16 md:py-2 lg:px-12 ">
      <Logo></Logo>
      <PrimaryNavigation></PrimaryNavigation>
      <SecondaryNavigation></SecondaryNavigation>
    </div>
  );
}
