import AccountMenu from "./account-menu/AccountMenu";
import Notifications from "./notifications/Notifications";
import SearchTool from "./search-tool/SearchTool";


export default function SecondaryNavigation () {
  return (
    <div className="absolute right-2 inline-flex justify-self-end mr-0 h-auto items-center gap-5 sm:right-5 lg:right-12">
      <SearchTool></SearchTool>
      <Notifications></Notifications>
      <AccountMenu></AccountMenu>
    </div>
  );
}
