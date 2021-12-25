import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { updateProfile } from "firebase/auth";
import axios from "axios";
const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const fetchAdminStatusCTS = axios.CancelToken.source();
  const [adminStatus, setAdminStatus] = useState();
  function signUp(email, password) {
    //returns a promise
    return auth.createUserWithEmailAndPassword(email, password);
  }

  async function getAdminStatus(email) {
    try {
      const result = await axios({
        method: "get",
        url: `http://localhost:8080/user/admin/${email}`,
        cancelToken: fetchAdminStatusCTS.token,
      });
      console.log(result);
      console.log(result.data);
      setAdminStatus(result.data);
      console.log("admin status in auth " + adminStatus);
    } catch (e) {
      setAdminStatus(false);
      console.log("Failed to get admin status.\n" + e);
    }
  }

  function login(email, password) {
    //returns a promise
    getAdminStatus(email);
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
    adminStatus,
    signUp,
    login,
    logout,
    setUsername,
    setProfilePicture,
    getAdminStatus,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  );
}
