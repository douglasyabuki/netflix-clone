// Components
import AccountMenu from './account-menu/AccountMenu';
import NotificationMenu from './notifications-menu/NotificationMenu';
import SearchTool from './search-tool/SearchTool';

// SecondaryNavigation main function
export default function SecondaryNavigation() {

  // Returns the top-right menu to Header.tsx
  return (
    <div className="absolute right-2 mr-0 inline-flex h-auto items-center gap-5 justify-self-end sm:right-5 lg:right-12">
      <SearchTool></SearchTool>
      <NotificationMenu></NotificationMenu>
      <AccountMenu></AccountMenu>
    </div>
  );
}
