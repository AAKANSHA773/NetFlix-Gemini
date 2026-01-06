import GptSearchBar from "./GptSearchBar";
import GtpMovieSuggestion from "./GtpMovieSuggestion";
import { BACKGROUNDIMAGE } from "../utils/constant";

const GtpSearch = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">

      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={BACKGROUNDIMAGE}
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Foreground */}
      <GptSearchBar />
      <GtpMovieSuggestion />
    </div>
  );
};

export default GtpSearch;
