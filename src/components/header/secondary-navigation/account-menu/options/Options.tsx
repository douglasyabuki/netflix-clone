// Const
import { profileList, optionList, IOptions } from './option-list';

// Props destructuring
interface Props {
  isActive: boolean;
}

export default function Options({ isActive }: Props) {
  const mappedProfiles = profileList.map((profile) => (
    <li className="flex h-12 w-48 cursor-pointer hover:underline" key={profile.id}>
      <a href="" className="flex justify-start items-center">
        <img src={profile.icon} className="h-9 rounded"></img>
        <h2 className="inline-flex p-2">{profile.title}</h2>
      </a>
    </li>
  ));

  const mappedOptions = optionList.map((option) => (
    <li className="flex h-12 w-48 cursor-pointer hover:underline" key={option.id}>
      <a href="" className="flex justify-start items-center">
        <i className="material-icons text-3xl">{option.icon}</i>
        <h2 className="inline-flex p-2 pl-3">{option.title}</h2>
      </a>
    </li>
  ));

  const signOut = (
    <li className="flex h-12 w-48 border-t-2 border-t-netflix-white-font cursor-pointer hover:underline">
      <a href="" className="flex align-middle justify-center text-center items-center">
        <h2 className="w-48 text-center">Sign out of Netflix</h2>
      </a>
    </li>
  )

  return (
    <div className={isActive ? 'relative right-44 top-2 duration-300' : 'hidden duration-300'}>
      <div className="absolute h-100 w-56 bg-netflix-black p-4 opacity-90">
        <ul>{mappedProfiles}</ul>
        <ul>{mappedOptions}</ul>
        <ul>{signOut}</ul>
      </div>
    </div>
  );
}
