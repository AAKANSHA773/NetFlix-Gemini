
import { IMAGECDNURL } from "../utils/constant";
import { setSelectedMovie } from "../utils/movieSLice";
import { useDispatch } from "react-redux";

const MovieCart = ({movie, posterPath }) => {
  const dispatch = useDispatch();
  if (!posterPath) return null;

  const handleSelectedMovie = () => {
    dispatch(setSelectedMovie(movie));
  };

  return (
    <div
      className="w-36 md:w-48 pr-4 cursor-pointer"
      onClick={() => {
        console.log("clicked");
        handleSelectedMovie();
      }}
    >
      <img alt="Movie Card" src={IMAGECDNURL + posterPath} />
    </div>
  );
};

export default MovieCart;
