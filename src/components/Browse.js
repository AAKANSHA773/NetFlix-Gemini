import { useSelector } from "react-redux";
import useNowPlayingMOvies from "../hooks/useNowPlayingMovies";
import usePopulerMovies from "../hooks/usePopulerMovies";
import GtpSearch from "./GtpSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import MovieDetails from "./MovieDetails";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMOvies();
  usePopulerMovies();
  useUpcomingMovies();
  useTopratedMovies();

  return (
    <div  className="relative bg-black min-h-screen">
      <Header />
      {showGptSearch ? (
        <GtpSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <MovieDetails />
    </div>
  );
};

export default Browse;
