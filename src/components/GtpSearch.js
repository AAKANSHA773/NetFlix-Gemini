
import GptSearchBar from './GptSearchBar'
import GtpMovieSuggestion from './GtpMovieSuggestion'
import { BACKGROUNDIMAGE } from '../utils/constant'

const GtpSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BACKGROUNDIMAGE}
          alt="background"
        />
      </div>
      <GptSearchBar/>
      <GtpMovieSuggestion/>
    </div>
  )
}

export default GtpSearch
