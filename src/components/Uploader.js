import React, { useEffect } from "react";
import useStorage from "../hooks/UseStorage";
function Uploader({ file, setFile, setUrl }) {
  const { url, progress } = useStorage(file);
  let progresPercentage = `${progress} %`;
  console.log(progresPercentage);
  useEffect(() => {
    if (url) {
      setFile(null);
      setUrl(url);
    }
  }, [url, setFile]);
  console.log(url);
  if (progress != 100) {
    return (
      <span className="badge bg-primary">
        Uploading {parseFloat(progresPercentage).toFixed(2)}%
      </span>
    );
  } else {
    return (
      <div>
        <span className="badge bg-success">Uploaded successfully</span>
        <span style={{ display: "none" }} className="badge bg-info">
          url: {url}
        </span>
      </div>
    );
  }
}

export default React.memo(Uploader);
