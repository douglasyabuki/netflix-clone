export interface IMovieRowProps {
  title: string;
  items: any;
}

export default function MovieRow ({title, items}: IMovieRowProps) {
  return (
    <div>
      <h2>{title}</h2>
      {/* {items.map((item, id) => {

      })} */}
    </div>
  );
}
