// Props destrucutring
export interface Props {
  item: any;
}

// MovieCard main function
export default function MovieCard({ item }: Props) {

  // Returns the movie poster to MovieRow.tsx
  return (
    <div className="relative h-auto min-w-[60px] scale-90 cursor-pointer transition-transform duration-200 ease-out xs:min-w-[120px] md:min-w-[260px] md:hover:scale-100 lg:min-w-[300px] xl:min-w-[360px]">
      <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
    </div>
  );
}
