// Interfaces
import { IOtherLinks } from './other-links-list';

// Props destructuring
interface Props {
  list: IOtherLinks[];
}

// Other Links main function
export default function OtherLinks({ list }: Props) {
  // Returns mapped link list to be rendered by Footer.tsx
  return (
    <div className="columns-2 space-y-2 px-4 text-justify md:columns-4">
      {list
        ? list.map((item) => (
            <div key={item.id}>
              <a className="text-sm hover:underline" href={item.href}>
                {item.title}
              </a>
            </div>
          ))
        : null}
    </div>
  );
}
