import MovieItem from './MovieItem';

export default function MovieListCard({ items }) {
  const [movie1, movie2, movie3] = items;

  return (
    <div className="movies">
      <MovieItem {...movie1} />
      <MovieItem {...movie2} />
      <MovieItem {...movie3} />
    </div>
  );
}
