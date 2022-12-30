import AccountMenu from "./account-menu/AccountMenu";
import Notifications from "./notifications/Notifications";
import SearchTool from "./search-tool/SearchTool";


export default function SecondaryNavigation () {
  return (
    <div className="absolute right-3 top-4 flex max-h-8 items-center">
      <SearchTool></SearchTool>
      <Notifications></Notifications>
      <AccountMenu></AccountMenu>
    </div>
  );
}
