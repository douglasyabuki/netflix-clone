// Const
import { primaryLinks } from './primary-links';

export default function PrimaryNavigation() {
  const listLinks = primaryLinks.map((link) =>
  <li key={link.id}>
    <a href={link.link}>{link.name}</a>
  </li>
  );

  return (
    <div className="">
      <ul className="">
        <li><a>Browse</a></li>
      {listLinks}
      </ul>
    </div>
  );
}
