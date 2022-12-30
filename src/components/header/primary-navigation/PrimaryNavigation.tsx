// Const
import { primaryLinks } from './primary-links';

// Hooks
import { useState } from 'react';

export default function PrimaryNavigation() {
  const [isActive, setIsActive] = useState<boolean>(false)

  const listLinks = primaryLinks.map((link) =>
  <li className="px-3" key={link.id}>
    <a href={link.link}>{link.name}</a>
  </li>
  );

  return (
    <div className="flex items-center content-between">
      <ul className="text-sm sm:block md:flex">
        <li className="sm: md:hidden"><a>Browse</a></li>
      {isActive? listLinks : listLinks}
      </ul>
    </div>
  );
}
