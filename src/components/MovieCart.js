
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
     
  className="
    min-w-[120px] md:min-w-[150px]
    cursor-pointer
    transition-transform duration-300
    hover:scale-105
  "


      onClick={() => {
        console.log("clicked");
        handleSelectedMovie();
      }}
    >
       <img
  className="rounded-md"
  src={IMAGECDNURL + posterPath}
  alt="Movie"
/>
    </div>
  );
};

export default MovieCart;
