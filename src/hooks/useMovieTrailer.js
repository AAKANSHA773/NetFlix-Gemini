import { useCallback, useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSLice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideo
  );

  const getMovieVideo = useCallback(async () => {
    if (!movieId) return;

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );

    const json = await data.json();

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer =
      filterData?.length > 0
        ? filterData[0]
        : json.results?.[0];

    dispatch(addTrailerVideo(trailer));
  }, [movieId, dispatch]);

  useEffect(() => {
    if (!trailerVideo) {
      getMovieVideo();
    }
  }, [getMovieVideo, trailerVideo]);
};

export default useMovieTrailer;
