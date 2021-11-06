import React from "react";

function Comment({ content, author }) {
  //like, dislike, reply, show replies for each comment !
  return (
    <div>
      {author} :<p>{content}</p>
    </div>
  );
}

export default Comment;
