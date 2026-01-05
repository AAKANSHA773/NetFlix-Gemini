import { useCallback, useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSLice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector(
    (store) => store.movies.upcomingMovies
  );

  const getUpcomingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTION
    );

    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  }, [dispatch]);

  useEffect(() => {
    if (!upcomingMovies) {
      getUpcomingMovies();
    }
  }, [getUpcomingMovies, upcomingMovies]);
};

export default useUpcomingMovies;
