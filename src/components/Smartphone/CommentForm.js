import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
function CommentForm({ reviewCallback, label, receiverId }) {
  const { id } = useParams();
  const commentInputRef = useRef("");
  const { currentUser } = useAuth();
  const [commentError, setCommentError] = useState();
  const [submissionVerification, setSubmissionVerification] = useState();

  const submitCommentCancelTokenSource = axios.CancelToken.source();

  function handleComment(id) {
    let type = label === "reply" ? "c" : "s";
    let parent = receiverId === undefined ? null : receiverId;
    console.log(commentInputRef.current.value);
    const cmt = {
      content: commentInputRef.current.value,
      smartphoneId: id,
      writerId: currentUser.displayName,
      parentId: parent,
      receiverType: type,
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
        console.log(id);
        console.log(response.status);
        setSubmissionVerification(
          `Your ${label} is successfully submitted ${parent}.`
        );
        commentInputRef.current.value = "";
        setTimeout(function () {
          reviewCallback({ stateChange: true });
          setSubmissionVerification("");
        }, 1000);
      })
      .catch((error) => {
        setCommentError({
          msg: `Could not receive your ${label}. Please try again later.`,
          title: "Error!",
        });
        setTimeout(function () {
          setCommentError();
        }, 3000);
      });
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
    console.log(currentUser);
    return () => {
      submitCommentCancelTokenSource.cancel();
    };
  }, []);

  return (
    <div className="container">
      {commentError && (
        <div className="alert alert-danger" role="alert">
          {commentError.msg}
        </div>
      )}
      {submissionVerification && (
        <div className="alert alert-success" role="alert">
          {submissionVerification}
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1">
          Write a new {label} to {receiverId}
        </label>
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
