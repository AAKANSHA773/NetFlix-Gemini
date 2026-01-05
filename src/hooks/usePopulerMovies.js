import { useCallback, useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopulerMovie } from "../utils/movieSLice";

const usePopulerMovies = () => {
  const dispatch = useDispatch();

  const pouplerMovies = useSelector(
    (store) => store.movies.pouplerMovies
  );

  const getPopulerMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTION
    );

    const json = await data.json();
    dispatch(addPopulerMovie(json.results));
  }, [dispatch]);

  useEffect(() => {
    if (!pouplerMovies) {
      getPopulerMovies();
    }
  }, [getPopulerMovies, pouplerMovies]);
};

export default usePopulerMovies;
