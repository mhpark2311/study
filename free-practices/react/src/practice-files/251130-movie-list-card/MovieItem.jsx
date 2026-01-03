export default function MovieItem({ title, genre, poster }) {
  return (
    <article className="movie">
      <img className="movie__img" src={poster} alt="movie poster" />
      <div className="movie__body">
        <div className="movie__title">{title}</div>
        <div className="movie__genre">{genre}</div>
      </div>
    </article>
  );
}
