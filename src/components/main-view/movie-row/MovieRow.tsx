export interface IMovieRowProps {
  title: string;
  items: any;
}

export default function MovieRow({ title, items }: IMovieRowProps) {
  return (
    <div className="block mb-3">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <div className="flex">
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <div className="inline-block h-auto w-80 mr-5">
              {/* <img
              className="object-contain w-36 h-24"
                src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
                alt={item.original_title}
              /> */}
              <img
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_title}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

// https://image.tmdb.org/t/p/w300/sw7mordbZxgITU877yTpZCud90M.jpg
