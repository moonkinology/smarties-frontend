import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
export const adminContext = createContext(false);
const AdminContext = () => {
  const { currentUser } = useAuth();
  const [adminStatus, setAdminStatus] = useState(false);
  const fetchAdminStatusCTS = axios.CancelToken.source();
  async function getAdminStatus() {
    //sign up is async ==> try catch
    try {
      await axios({
        method: "get",
        url: `http://localhost:8080/user/admin/${currentUser.email}`,
        cancelToken: fetchAdminStatusCTS.token,
      });
      setAdminStatus(true);
    } catch (e) {
      console.log("Failed to get admin status.\n" + e);
    }
  }

  useEffect(() => {
    if (currentUser) getAdminStatus();
    console.log(currentUser?.email);
    return () => {
      fetchAdminStatusCTS.cancel();
    };
  }, [currentUser]);

  return <adminContext.Provider value={adminStatus}></adminContext.Provider>;
};
export default AdminContext;
