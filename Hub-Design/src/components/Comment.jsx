import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <img src={comment.profilePic} alt={`${comment.name}'s profile`} className="comment-profile-image" />
      <div className="comment-text">
        <strong>{comment.name} 
        <span className="comment-time">{comment.timestamp}</span>
        </strong>
         {comment.text}
      </div>
    </div>
  );
};

export default Comment;
