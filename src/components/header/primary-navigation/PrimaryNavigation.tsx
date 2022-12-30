// Const
import { primaryLinks } from './primary-links';

// Hooks
import { useState } from 'react';

export default function PrimaryNavigation() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const listLinks = primaryLinks.map((link) => (
    <li className="px-3" key={link.id}>
      <a href={link.link}>{link.name}</a>
    </li>
  ));

  return (
    <div className="flex content-between items-center">
      <ul className="text-sm sm:block lg:flex">
        <li className="sm: md:hidden">
          <a>Browse</a>
        </li>
        {isActive ? listLinks : listLinks}
      </ul>
    </div>
  );
}
