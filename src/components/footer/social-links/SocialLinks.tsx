// Interfaces
import { ISocialLink } from './social-links-list';

// Props destructuring
interface ISocialLinksProps {
  iconList: ISocialLink[];
}

// Social Links main function
export default function SocialLinks({ iconList }: ISocialLinksProps) {

  // Returns the icons of Social Media and its links to Footer.tsx
  return (
    <div className="ml-4 flex space-x-6 p-2">
      {iconList
        ? iconList.map((icon) => (
            <a href={icon.href} key={icon.id} aria-label={icon.alt}>
              <i className={`${icon.url} text-[1.7rem] text-netflix-white-font`}></i>
            </a>
          ))
        : null}
    </div>
  );
}
