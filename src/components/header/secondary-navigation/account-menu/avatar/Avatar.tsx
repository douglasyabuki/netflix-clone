export default function Avatar () {
  return (
    <div className="flex items-center h-auto w-12 lg:w-16">
      <img src="/avatar.png" alt="Account icon" className="cover w-10 rounded"/>
      <i className="hidden lg:block material-icons text-netflix-white-font h-auto rotate-180 hover:rotate-0 duration-300">arrow_drop_down</i>
    </div>
  );
}
