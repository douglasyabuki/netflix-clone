export interface Props {
  item: any;
}

export default function MovieCard({ item }: Props) {
  return (
    <div className="relative h-auto min-w-[180px] scale-90 cursor-pointer transition-transform duration-200 ease-out md:min-w-[260px] md:hover:scale-100">
      <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
    </div>
  );
}
