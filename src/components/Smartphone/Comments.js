import React, { useRef, useState, useEffect } from "react";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ReplyModal from "./ReplyModal";
import axios from "axios";
import CommentForm from "./CommentForm";
function Comments() {
  const [comments, setComments] = useState([]);
  const [commentSubmissionCallback, setCommentSubmissionCallback] =
    useState(false);
  const [replySubmissionCallback, setReplySubmissionCallback] = useState(false);
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
  }, [commentSubmissionCallback, replySubmissionCallback]);

  return (
    <div className="w-100 ">
      <div>
        <CommentForm
          commentSubmissionCallBack={setCommentSubmissionCallback}
          label={"comment"}
        />
      </div>

      <div className="container d-flex justify-content-center ">
        <div className="row mt-5 d-flex align-items-end justify-content-center ">
          {comments.map((comment) => (
            <div key={comment.id} className="col-11 mb-5 comment">
              <Comment
                content={comment.content}
                author={comment.writer}
                id={comment.id}
                votes={comment.votes}
                replyCount={comment.replyCounts}
                replySubmissionCallback={setReplySubmissionCallback}
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
