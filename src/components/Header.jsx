import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { BiUserPin } from "react-icons/bi";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleSearch } from "../utils/searchSlice";
import { languageSupport } from "../utils/langConstatns";
import { changeLanguage } from "../utils/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const search = useSelector((store) => store.search.isSearchVisible);
  const handleSingout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSearch = () => {
    dispatch(toggleSearch());
  };

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="py-6 absolute w-full top-0 z-50">
      <div className="container mx-auto px-12 flex justify-between items-center">
        <img className="w w-44" src={LOGO} alt="Netflix Logo" />
        {user && (
          <div className="flex items-center">
            {search && (
              <select
                onChange={handleLanguage}
                className="px-4 py-2 bg-white rounded"
              >
                {languageSupport.map((lang) => (
                  <option key={lang.key} value={lang.key}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={handleSearch}
              className="rounded-md mr-2 px-3 py-2 ml-2 text-sm text-white bg-purple-700"
            >
              {search ? "Homepage" : "Search"}
            </button>
            {user.photoURL ? (
              <img
                className="w-10 h-10 object-cover rounded"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <BiUserPin className="text-3xl text-red-500" />
            )}

            <button
              onClick={handleSingout}
              className="border px-2 py-1 ml-2 text-sm text-white border-white rounded hover:bg-white hover:text-black"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
