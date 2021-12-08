import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { updateProfile } from "firebase/auth";
const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    //returns a promise
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    //returns a promise
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    //returns a promise
    return auth.signOut();
  }

  function setUsername(username, photoURL) {
    return updateProfile(auth.currentUser, {
      displayName: username,
    });
  }
  function setProfilePicture(photoURL) {
    return updateProfile(auth.currentUser, {
      photoURL: photoURL,
    });
  }
  useEffect(() => {
    // the  onAuthStateChanged returns a method. when we call this, it unsubscribes onAuthStateChanged event
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) console.log(user);
      if (user) console.log(user.uid);
      setCurrentUser(user);
      setLoading(false);
    });

    //unsubscribe from this listener when we unmount this component
    return unsubscribe;
  }, []);

  //export
  const value = {
    currentUser,
    signUp,
    login,
    logout,
    setUsername,
    setProfilePicture,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  );
}
