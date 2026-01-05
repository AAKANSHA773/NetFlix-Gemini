import { useCallback, useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopratedMovies } from "../utils/movieSLice";

const useTopratedMovies = () => {
  const dispatch = useDispatch();

  const topratedMovies = useSelector(
    (store) => store.movies.topratedMovies
  );

  const getTopratedMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTION
    );

    const json = await data.json();
    dispatch(addTopratedMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    if (!topratedMovies) {
      getTopratedMovies();
    }
  }, [getTopratedMovies, topratedMovies]);
};

export default useTopratedMovies;
