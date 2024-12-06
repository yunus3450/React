import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';

const CommentsSection = ({ comments, newComment, setNewComment, addComment }) => {
  return (
    <div className="comments-section">
      <CommentInput newComment={newComment} setNewComment={setNewComment} addComment={addComment} />
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsSection;
