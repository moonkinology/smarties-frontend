import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
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

  useEffect(() => {
    // the  onAuthStateChanged returns a method. when we call this, it unsubscribes onAuthStateChanged event
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });

    //unsubscribe from this listener when we unmount this component
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  );
}
