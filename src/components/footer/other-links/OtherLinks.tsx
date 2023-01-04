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
    <div className="grid-cols-2 space-y-2 px-4 text-justify">
      {list
        ? list.map((item) => (
            <div>
              <a className="text-sm hover:underline" href={item.href} key={item.id}>
                {item.title}
              </a>
            </div>
          ))
        : null}
    </div>
  );
}
