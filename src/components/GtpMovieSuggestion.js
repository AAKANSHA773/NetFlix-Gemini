import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GtpMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
  <div className="p-4 m-4 bg-black flex justify-between  text-white bg-opacity-60">
    {movieNames.map((name, index) => (
      <MovieList
        key={name}
        title={name}
        movies={movieResults[index]}
      />
    ))}
  </div>
);

};

export default GtpMovieSuggestion;
