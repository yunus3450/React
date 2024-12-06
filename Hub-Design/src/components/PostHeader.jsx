import React from 'react';

const PostHeader = () => {
  return (
    <div className="post-header">
      <img
        src="/img/Yunus.PNG"
        alt="GameON Türk Telekom"
        className="profile-image"
      />
      <div className="post-info">
        <span className="gameon-title">GAMEON Türk Telekom</span>
        <span className="date-info">Today, 14:15</span>
      </div>
    </div>
  );
};

export default PostHeader;
