import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
function Replies({
  id,
  replyCount,
  clickCallBack,
  currentReplyState,
  fetchReplyCallback,
}) {
  const [replies, setReplies] = useState([]);
  const getRepliesCancelTokenSource = axios.CancelToken.source();
  const { currentUser } = useAuth();
  const [voteError, setVoteError] = useState();

  function handleClick() {
    fetchReplyCallback(replies);
    clickCallBack(!currentReplyState);
  }

  const icon =
    currentReplyState === false ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-double-up"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
        />
        <path
          fillRule="evenodd"
          d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-double-up"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
        <path
          fillRule="evenodd"
          d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    );

  function showNothingToShowError() {
    setVoteError({
      msg: "You need to be logged in to be able to submit your vote",
      title: "Error!",
    });
    setTimeout(function () {
      setVoteError();
    }, 3000);
  }

  useEffect(() => {
    async function fetchReplies(id) {
      try {
        const result = await axios({
          method: "get",
          url: `http://localhost:8080/reply/${id}`,
          cancelToken: getRepliesCancelTokenSource.token,
        });
        console.log("cmt res: " + result.data);
        setReplies(result.data);
      } catch (error) {
        console.log("error while fetching comments:" + error);
      }
    }
    fetchReplies(id);

    return () => {
      getRepliesCancelTokenSource.cancel();
    };
  }, []);

  return (
    <div>
      <button
        disabled={replyCount === 0}
        type="button"
        onClick={() => handleClick()}
        className="btn btn-outline-dark position-relative"
      >
        {icon}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
          {replyCount}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  );
}

export default Replies;
