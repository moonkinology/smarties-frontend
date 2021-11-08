import React, { useRef, useState, useEffect } from "react";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import CommentForm from "./CommentForm";
function Comments() {
  const [comments, setComments] = useState([]);
  const [commitSubmissinCallBack, setCommitSubmissinCallBack] = useState({});
  const fetchCommentCancelTokenSource = axios.CancelToken.source();
  const fetchRandomImagesCancelTokenSource = axios.CancelToken.source();
  const { id } = useParams();

  useEffect(() => {
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

    return () => {
      fetchCommentCancelTokenSource.cancel();
      fetchRandomImagesCancelTokenSource.cancel();
    };
  }, [commitSubmissinCallBack]);

  return (
    <div>
      <div>
        <CommentForm reviewCallback={setCommitSubmissinCallBack} />
      </div>

      <div className="container d-flex justify-content-center">
        <div className="row mt-5 d-flex align-items-end justify-content-center">
          {comments.map((comment) => (
            <div key={comment.id} className="col-8 mb-5">
              <Comment
                content={comment.content}
                author={comment.writer}
                id={comment.id}
                votes={comment.votes}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;
/**
 *
 *
 */
