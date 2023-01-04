// Props destructuring
export interface Props {
  onClickHandler: React.MouseEventHandler<HTMLElement>;
}

// SlideLeft main function
export default function SlideLeft({ onClickHandler }: Props) {

  // Returns the button responsible for sliding the carousel to the left on MovieRow.tsx
  return (
    <div
      onClick={onClickHandler}
      role={'button'}
      className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-4 cursor-pointer bg-transparent text-center opacity-0 transition hover:scale-100 group-hover:opacity-100"
    >
      <i className={'material-icons text-md xs:text-2xl md:text-4xl'}>arrow_back_ios</i>
    </div>
  );
}
