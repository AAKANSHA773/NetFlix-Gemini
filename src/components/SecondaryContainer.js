import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovie && (
      <div className="bg-black">
         <div className="bg-black relative z-20 space-y-12">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
         <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Top Rated "} movies={movies.topratedMovies} />
        <MovieList title={"Populer"} movies={movies.populerMovies} />
       
      </div></div>
    )
  );
};

export default SecondaryContainer;
