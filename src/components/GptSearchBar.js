import { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { geminiModel } from "../utils/geminiAl";
import { API_OPTION } from "../utils/constant";
import { addGeminiMoviesResults } from "../utils/gtpSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const hanldeGptSearchClick = async () => {
    if (!searchText.current.value.trim()) return;

    try {
      setLoading(true);

      const query = searchText.current.value;

      const prompt = `You are a movie recommendation system.
      Suggest exactly 5 movies for the query: "${query}"
      Only return movie names, comma-separated.`;

      const result = await geminiModel.generateContent(prompt);
      const response = await result.response;

      const geminiMovies = response
        .text()
        .split(",")
        .map((m) => m.trim());

      const arrayData = geminiMovies.map((movie) =>
        searchMoviesTMDB(movie)
      );
      const tmdbResults = await Promise.all(arrayData);

      const exactlyMatches = tmdbResults.map((movie, index) => {
        const movieName = geminiMovies[index].toLowerCase();
        return movie.find(
          (m) => m.title?.toLowerCase() === movieName
        );
      });

      dispatch(
        addGeminiMoviesResults({
          movieNames: geminiMovies,
          movieResults: exactlyMatches.map((m) => (m ? [m] : [])),
        })
      );
    } catch (error) {
      console.error("GPT Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="flex justify-center pt-28 px-4">
    <form
      onSubmit={(e) => e.preventDefault()}
      className="
        w-full md:w-2/5
        bg-[#1f1f1f]
        border border-gray-700
        rounded-xl
        shadow-xl
        flex items-center
        p-2
        gap-2
      "
    >
      <input
        ref={searchText}
        type="text"
        placeholder={lang[langKey].gptSearchPlaceHolder}
        disabled={loading}
        className="
          flex-1
          bg-white
          text-black
          placeholder-gray-500
          px-4 py-3
          rounded-lg
          outline-none
        "
      />

      <button
        onClick={hanldeGptSearchClick}
        disabled={loading}
        className={`
          px-6 py-3
          rounded-lg
          font-semibold
          text-white
          transition
          ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }
        `}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  </div>
);
}
export default GptSearchBar;
