import React, { useRef, useState, useEffect } from "react";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

function Comments() {
  const [comments, setComments] = useState([]);
  const fetchCommentCancelTokenSource = axios.CancelToken.source();
  const { id } = useParams();

  useEffect(() => {
    async function fetchComments(id) {
      try {
        const result = await axios({
          method: "get",
          url: `http://localhost:8080/cmt-sp/${id}`,
          cancelToken: fetchCommentCancelTokenSource.token,
        });
        console.log("cmt res: " + result.data);
        setComments(result.data);
      } catch (error) {
        console.log("error while fetching comments:" + error);
      }
    }
    fetchComments(id);
    console.log(comments);
    return () => {
      fetchCommentCancelTokenSource.cancel();
    };
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        {comments.map((comment) => (
          <div key={comment.id} className="col-12 col-md-6 col-xl-4 col- mb-5">
            <Comment content={comment.content} author={comment.writer} />
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
