// Components
import Avatar from './avatar/Avatar';
import Options from './options/Options';

// Hooks
import { useState } from 'react';

// AccountMenu main function
export default function AccountMenu() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onClickHandler = () => {
    setIsActive(!isActive);
  };

  // Returns the menu to SecondaryNavigation.tsx
  return (
    <div onMouseLeave={() => setIsActive(false)} className="block">
      <Avatar onClickHandler={onClickHandler} isActive={isActive}></Avatar>
      <Options isActive={isActive}></Options>
    </div>
  );
}
