// Const
import { notificationList } from './notification-list';

// Props destructuring
export interface Props {
  isActive: boolean;
}

// Notifications main function
export default function Notifications({ isActive }: Props) {
  // Maps the notification list into a HTML List Element
  const mappedNotifications = notificationList.map((notification) => (
    <li
      className="w-88 flex h-24 cursor-pointer self-center border-b-2 border-b-gray-300"
      key={notification.id}
    >
      <a href="" className="flex">
        <img src={notification.image} className="h-16 w-28 self-center rounded"></img>
        <div className="self-center pl-4 text-left">
          <h2 className="inline-flex text-xl opacity-80 hover:opacity-100">
            {notification.content}
          </h2>
          <p>{notification.date}</p>
        </div>
      </a>
    </li>
  ));

  // Returns the notifications to NotificationMenu.tsx
  return (
    <div className={isActive ? 'relative top-6 duration-300' : 'hidden duration-300'}>
      <div className="absolute right-0 h-auto w-96 border-t-2 bg-netflix-black p-4 opacity-90">
        <ul>{mappedNotifications}</ul>
      </div>
    </div>
  );
}
