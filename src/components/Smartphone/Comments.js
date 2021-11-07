import React, { useRef, useState, useEffect } from "react";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

function Comments() {
  const [comments, setComments] = useState([]);
  const [images, setImages] = useState();

  const fetchCommentCancelTokenSource = axios.CancelToken.source();
  const fetchRandomImagesCancelTokenSource = axios.CancelToken.source();
  const { id } = useParams();

  useEffect(() => {
    async function fetchRandomImages() {
      try {
        const result = await axios({
          method: "get",
          url: " https://picsum.photos/v2/list",
          cancelToken: fetchRandomImagesCancelTokenSource.token,
        });
        console.log(result.data);
        console.log(result);
        console.log("successfully catched the random images");
        const urlList = result.data.map((datum) => datum.download_url);
        console.log(urlList);
        setImages(urlList);
      } catch (error) {
        console.log("error while fetching rand imgs:" + error);
      }
    }
    async function fetchComments(id) {
      try {
        const result = await axios({
          method: "get",
          url: `http://localhost:8080/cmt-sp-detailed/${id}`,
          cancelToken: fetchCommentCancelTokenSource.token,
        });
        console.log("cmt res: " + result.data);
        setComments(result.data);
      } catch (error) {
        console.log("error while fetching comments:" + error);
      }
    }
    fetchComments(id);
    fetchRandomImages();
    console.log(images);

    return () => {
      fetchCommentCancelTokenSource.cancel();
      fetchRandomImagesCancelTokenSource.cancel();
    };
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row mt-5 d-flex align-items-end justify-content-center">
        {images &&
          comments.map((comment) => (
            <div key={comment.id} className="col-8 mb-5">
              <Comment
                content={comment.content}
                author={comment.writer}
                id={comment.id}
                votes={comment.votes}
                img={images[comments.indexOf(comment)]}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Comments;
/**
 *
 *
 */
