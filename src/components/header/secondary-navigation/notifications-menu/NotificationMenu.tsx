// Components
import { notificationNumber } from './notifications/notification-list';
import Notifications from './notifications/Notifications';

// Hooks
import { useState, useRef } from 'react';

// Notification menu main function
export default function NotificationMenu() {
  // Setting initial values and declaring states
  const [isActive, setIsActive] = useState<boolean>(false);
  const [numberOfNotifications, setNumberOfNotifications] = useState<number>(notificationNumber);
  const timeout = useRef(null);

  // When the user clicks the notification div, it renders the Notification.tsx component
  const onClickHandler = () => {
    setIsActive(!isActive);
    setNumberOfNotifications(0);
  };

  // Function to set a timer to hide menu onMouseLeave
  const onMouseLeaveHandler = () => {
    timeout.current = setTimeout(() => {
      setIsActive(false);
    }, 500);
  };

  // Function to reset the timer onMouseEnter
  const onMouseEnterHandler = () => {
    clearTimeout(timeout.current);
  };

  // Returns the notification icon (button) and menu to SecondaryNavigation.tsx
  return (
    <div
      onMouseLeave={onMouseLeaveHandler}
      onMouseEnter={onMouseEnterHandler}
      onClick={onClickHandler}
      className="block cursor-pointer items-center justify-center"
    >
      <i className="material-icons relative h-min w-8 text-2xl">
        <div
          className={
            numberOfNotifications !== 0
              ? 'absolute right-0 block h-4 w-4 content-center rounded-full bg-red-700'
              : 'hidden'
          }
        >
          <h1 className="right- top-0 text-xsmall text-netflix-white-font">
            {numberOfNotifications}
          </h1>
        </div>
        notifications
      </i>
      <Notifications isActive={isActive}></Notifications>
    </div>
  );
}
