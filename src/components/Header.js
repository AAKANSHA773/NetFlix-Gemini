import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import  { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gtpSlice";
import { useState } from "react";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser([]));
        navigate("/");
      }
    });
    // unsubscribed when component unmount
    return () => unsubscribed();
  }, [dispatch,navigate]);

  const handlGtpSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => dispatch(changeLanguage(e.target.value));
  return (
  <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-black/10">
    <div className="flex items-center justify-between px-4 py-3 md:px-8">

      {/* Logo */}
      <img
        src={LOGO}
        alt="Netflix Logo"
        className="w-32 md:w-44 cursor-pointer"
        onClick={() => navigate("/browse")}
      />

      {/* Right Section */}
      {user && (
        <div className="flex items-center gap-3 md:gap-4 relative">

          {/* Language Selector (Desktop only) */}
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="hidden md:block bg-black text-white border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT Toggle Button */}
          <button
            onClick={handlGtpSearchClick}
            className="bg-red-600 hover:bg-red-700 transition text-white text-sm md:text-base font-semibold px-4 py-2 rounded-md"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

          {/* Avatar */}
          <div className="relative">
            <img
              onClick={toggleMenu}
              src={user.photoURL}
              alt="user avatar"
              className="w-9 h-9 md:w-11 md:h-11 rounded-full cursor-pointer border border-gray-600 hover:border-white"
            />

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-black border border-gray-700 rounded-md shadow-lg">
                {/* Mobile language selector */}
                {showGptSearch && (
                  <select
                    onChange={handleLanguageChange}
                    className="block md:hidden w-full bg-black text-white px-3 py-2 text-sm border-b border-gray-700"
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                )}

                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-3 text-sm text-white hover:bg-red-600 transition"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  </header>
);

};

export default Header;
