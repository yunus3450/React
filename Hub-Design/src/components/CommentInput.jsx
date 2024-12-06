import React from 'react';

const CommentInput = ({ newComment, setNewComment, addComment }) => {
  return (
    <div className="comment-input">
      <img src='img/Yunus.PNG' alt="Profil Resmi" className="comment-profile-image" />
      <input
        type="text"
        placeholder="Yorumunuzu yazın..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={addComment} style={{ backgroundColor: '#7E15FF' }}>Gönder</button>
    </div>
  );
};

export default CommentInput;
