import { useDispatch, useSelector } from "react-redux";
import { IMAGECDNURL } from "../utils/constant";
import { closeMoviePopup } from "../utils/movieSLice";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { selectedMovie, isPopupOpen } = useSelector((store) => store.movies);

  if (!isPopupOpen || !selectedMovie) return null;

  const movie = selectedMovie;
  console.log(movie)
  console.log("details", movie);

  const { original_title, overview, poster_path,release_date,vote_average ,title} = movie;
  return (
    <div
      className="
        fixed inset-0 
        bg-black bg-opacity-70 
        flex justify-center items-center 
        z-[9999] transition-opacity duration-300
      "
    >
      <div
        className="
          bg-gray-900 text-white p-6 rounded-2xl 
          w-11/12 md:w-2/3 lg:w-1/2 
          shadow-2xl relative 
          animate-fadeIn
        "
      >
        {/* ❌ Close Button */}
        <button
          onClick={() => dispatch(closeMoviePopup())}
          className="absolute top-3 right-4 text-gray-300 hover:text-white text-2xl"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={IMAGECDNURL + poster_path}
            alt={original_title}
            className="w-full md:w-1/3 rounded-lg object-cover"
          />

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-3">{title}</h2>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              {overview}
            </p>

            <p className="mb-1">
              <strong>Release:</strong> {release_date}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {vote_average}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
