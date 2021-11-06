import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
function CommentForm() {
  const { id } = useParams();
  const commentInputRef = useRef("");
  const { currentUser } = useAuth();
  const [commentError, setCommentError] = useState();
  const [comments, setComments] = useState([]);
  const submitCommentCancelTokenSource = axios.CancelToken.source();
  const fetchCommentCancelTokenSource = axios.CancelToken.source();
  function handleComment(id) {
    console.log(commentInputRef.current.value);
    const cmt = {
      content: commentInputRef.current.value,
      smartphoneId: id,
      writerId: currentUser.uid,
      parentId: null,
      receiverType: "s",
      submissionTime: null,
      votes: null,
    };

    axios({
      method: "post",
      url: "http://localhost:8080/cmt",
      cancelToken: submitCommentCancelTokenSource.token,
      data: cmt,
    })
      .then((response) => {
        fetchComments(id);
        console.log(id);
        console.log(response.status);
      })
      .catch((error) => {
        setCommentError({
          msg: "You've already voted for this Smartphone and can't change your vote at the moment. Please try again later.",
          title: "Error!",
        });
        setTimeout(function () {
          setCommentError();
        }, 3000);
      });
  }

  function fetchComments(id) {
    /*
    axios({
      method: "get",
      url: `http://localhost:8080/vt/c-s/${id}`,
      cancelToken: fetchCommentCancelTokenSource.token,
    })
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => console.log("error while fetching votes:" + error));
  
    */
  }
  function showNotLoggedInError() {
    setCommentError({
      msg: "You need to be logged in to be able to submit your comment!",
      title: "Error!",
    });
    setTimeout(function () {
      setCommentError();
    }, 3000);
  }

  useEffect(() => {
    fetchComments(id);
    return () => {
      submitCommentCancelTokenSource.cancel();
      fetchCommentCancelTokenSource.cancel();
    };
  }, []);

  return (
    <div className="container">
      {commentError && (
        <div className="alert alert-danger" role="alert">
          {commentError.msg}
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1">Write a new comment</label>
        <textarea
          ref={commentInputRef}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        />
      </div>

      <div className="d-flex flex-row-reverse">
        <button
          type="submit"
          onClick={
            currentUser ? () => handleComment(id) : () => showNotLoggedInError()
          }
          className="btn btn-primary mb-3 p-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CommentForm;
