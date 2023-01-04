// Props destructuring
export interface Props {
  onClickHandler: React.MouseEventHandler<HTMLElement>;
}

// SlideRight main function
export default function SlideRight({ onClickHandler }: Props) {

  // Returns the button responsible for sliding the carousel to the right on MovieRow.tsx
  return (
    <div
      onClick={onClickHandler}
      role={'button'}
      className=" absolute top-0 bottom-0 right-5 z-40 m-auto h-9 w-4 cursor-pointer bg-transparent text-center opacity-0 transition hover:scale-100 group-hover:opacity-100"
    >
      <i className={'material-icons text-md xs:text-2xl md:text-4xl'}>arrow_forward_ios</i>
    </div>
  );
}
