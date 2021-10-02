import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = firestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          // each doc in documents array gonna have url, created at (because we spread the data object into an obj) and random id
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    //cleanup function: unsubscribes from the collection when we no longer use it
    return () => unsub();
  }, [collection]);
  /*fires a callback function everytime a change inside the collection occurs
, it also fires that callback function once initially as well
*/
  return { docs };
};
export default useFirestore;
