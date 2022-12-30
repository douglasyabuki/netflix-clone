export default function Avatar () {
  return (
    <div className="flex items-center h-8">
      <img src="/avatar.png" alt="Account icon" className="h-8 w-8"/>
      <i className="material-icons text-netflix-white-font h-1/2 rotate-180 hover:rotate-0 duration-300">arrow_drop_down</i>
    </div>
  );
}
