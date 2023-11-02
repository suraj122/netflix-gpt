import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { BiUserPin } from "react-icons/bi";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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

  return (
    <header className="py-6">
      <div className="container mx-auto px-12 flex justify-between items-center">
        <img className="w w-44" src={LOGO} alt="Netflix Logo" />
        {user && (
          <div className="flex items-center">
            {user.photoURL ? (
              <img
                className="w-12 h-12 object-cover rounded"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <BiUserPin className="text-3xl text-red-500" />
            )}

            <button
              onClick={handleSingout}
              className="border px-2 py-1 ml-2 text-sm border-black rounded hover:bg-black hover:text-white"
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
