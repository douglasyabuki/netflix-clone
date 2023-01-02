// Interface to the Notifications object
interface INotifications {
  id: number;
  image: string;
  content: string;
  date: string;
}

// Exports a List of notifications to be rendered by Notification.tsx
export const notificationList: INotifications[] = [
  { id: 0, image: '/1899.jpg', content: 'New Arrival', date: '1 month ago' },
  { id: 1, image: '/jojo.jpg', content: 'Now Available Season 4', date: '1 month ago' },
  { id: 2, image: '/archer.jpg', content: 'Now Available Season 13', date: '1 month ago' },
]

// Exports the number of notifications to be rendered by NotificationMenu.tsx
export const notificationNumber = notificationList.length;
