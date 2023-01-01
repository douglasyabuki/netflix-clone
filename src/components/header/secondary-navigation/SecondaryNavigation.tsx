import AccountMenu from "./account-menu/AccountMenu";
import Notifications from "./notifications/Notifications";
import SearchTool from "./search-tool/SearchTool";


export default function SecondaryNavigation () {
  return (
    <div className="relative right-3 flex h-auto items-center">
      <SearchTool></SearchTool>
      <Notifications></Notifications>
      <AccountMenu></AccountMenu>
    </div>
  );
}
