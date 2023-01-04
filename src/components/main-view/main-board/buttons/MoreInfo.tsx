// More Info main function
export default function MoreInfo() {

  // Returns the "More Info" button to MainBoard.tsx
  return (
    <div className="">
      <button className=":gap-2 flex h-5 w-20 items-center justify-center rounded-md bg-netflix-gray text-xsmall font-semibold text-netflix-white-font hover:opacity-80 xs:h-7 xs:w-24 lg:h-14 lg:w-44  lg:text-xl">
        <i className="material-icons text-sm xs:text-lg lg:text-4xl lg:font-extralight">
          info_outline
        </i>
        More Info
      </button>
    </div>
  );
}
