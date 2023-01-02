// Const
import { profileList, optionList } from './option-list';

// Props destructuring
interface Props {
  isActive: boolean;
}

// Account options main function
export default function Options({ isActive }: Props) {

  // Mapping the profile list to a HTML List Element
  const mappedProfiles = profileList.map((profile) => (
    <li className="flex h-12 w-48 cursor-pointer hover:underline" key={profile.id}>
      <a href="" className="flex items-center justify-start">
        <img src={profile.icon} className="h-9 rounded"></img>
        <h2 className="inline-flex p-2">{profile.title}</h2>
      </a>
    </li>
  ));

  // Mapping the setting option list to a HTML List Element
  const mappedOptions = optionList.map((option) => (
    <li className="flex h-12 w-48 cursor-pointer " key={option.id}>
      <a href="" className="flex items-center justify-start">
        <i className="material-icons text-3xl">{option.icon}</i>
        <h2 className="inline-flex p-2 pl-3 hover:underline">{option.title}</h2>
      </a>
    </li>
  ));

  // Declaring a new HTML List Element -> the sign out setting option
  const signOut = (
    <li className="flex h-12 w-48 cursor-pointer border-t-2 border-t-netflix-white-font hover:underline">
      <a href="" className="flex items-center justify-center text-center align-middle">
        <h2 className="w-48 text-center">Sign out of Netflix</h2>
      </a>
    </li>
  );

  // Returns the account and setting options to AccountMenu.tsx
  return (
    <div className={isActive ? 'relative top-5 duration-300' : 'hidden duration-300'}>
      <div className="h-100 absolute right-0 w-56 bg-netflix-black p-4 opacity-90">
        <ul>{mappedProfiles}</ul>
        <ul>{mappedOptions}</ul>
        <ul>{signOut}</ul>
      </div>
    </div>
  );
}
