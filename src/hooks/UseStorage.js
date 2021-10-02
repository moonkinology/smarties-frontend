import { useState, useEffect } from "react";
import { storage, firestore, timestamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    const storageRef = storage.ref(file.name);

    const collectionRef = firestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url: url, createdAt: createdAt });
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, error, url };
};

export default useStorage;
