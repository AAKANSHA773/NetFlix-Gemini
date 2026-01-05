import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 ">
     <h1 className="text-lg md:text-3xl py-4  text-white">{title}</h1>
      <div className="overflow-x-auto flex scroll-smooth no-scrollbar ">
        <div className="flex  ">
          {movies?.map((movie) => (
            <MovieCart key={movie.id} posterPath={movie.poster_path} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
