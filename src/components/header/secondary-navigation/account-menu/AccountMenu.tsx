// Components
import Avatar from './avatar/Avatar';
import Options from './options/Options';

// Hooks
import { useState, useRef } from 'react';

// AccountMenu main function
export default function AccountMenu() {

  // Setting state to menu display
  const [isActive, setIsActive] = useState<boolean>(false);
  const timeout = useRef(null);

  // Function to display menu onClick
  const onClickHandler = () => {
    setIsActive(!isActive);
  };

  // Function to set a timer to hide menu onMouseLeave
  const onMouseLeaveHandler = () => {
    timeout.current = setTimeout(() => {
      setIsActive(false);
    }, 500);
  }

  // Function to reset the timer onMouseEnter
  const onMouseEnterHandler = () => {
    clearTimeout(timeout.current);
  }

  // Returns the menu to SecondaryNavigation.tsx
  return (
    <div onMouseLeave={onMouseLeaveHandler} onMouseEnter={onMouseEnterHandler} className="block" id={"menu"}>
      <Avatar onClickHandler={onClickHandler} isActive={isActive}></Avatar>
      <Options isActive={isActive}></Options>
    </div>
  );
}
