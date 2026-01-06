
import GptSearchBar from './GptSearchBar'
import GtpMovieSuggestion from './GtpMovieSuggestion'
import { BACKGROUNDIMAGE } from '../utils/constant'

const GtpSearch = () => {
  return (
    <div   className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10">
        <img
          src={BACKGROUNDIMAGE}
          alt="background"
           className="w-full h-full object-cover"
        />
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#000000]" />

      </div>
      <GptSearchBar/>
      <GtpMovieSuggestion/>
    </div>
  )
}

export default GtpSearch
