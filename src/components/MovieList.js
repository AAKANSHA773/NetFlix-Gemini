import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="px-6 md:px-12">
      <h2 className="text-xl line-clamp-2 md:text-2xl font-semibold text-white mb-4">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <MovieCart
            key={movie.id}
            movie={movie}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};


export default MovieList;
