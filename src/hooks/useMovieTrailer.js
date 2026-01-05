import {  useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSLice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

   const trailerVideo = useSelector(store => store.movies.trailerVideo)
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.lenght ? filterData[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    if(!trailerVideo)
    getMovieVideo();
  }, []);
};
export default useMovieTrailer;
