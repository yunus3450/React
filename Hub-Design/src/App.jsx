import React, { useState } from 'react';
import './App.css';
import PostHeader from './components/PostHeader';
import CommentsSection from './components/CommentsSection';

function App() {
  const [comments, setComments] = useState([
    { id: 1, name: 'Hakan Çevik', text: 'Çok çekişmeli bir turnuva oldu. Büyük ödülü hakettiler.', profilePic: '/img/Yunus.PNG', timestamp: '3 days ago' },
    { id: 2, name: 'Sevim Dümen', text: 'İşte bu', profilePic: '/img/Yunus2.PNG', timestamp: '2 days ago' },
    { id: 3, name: 'Kaan Özdemir', text: 'Bir sonraki turnuvayı sabırsızlıkla bekliyorum', profilePic: '/img/Yunus3.PNG', timestamp: '1 day ago' },
  ]);

  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, name: 'Yunus Polat', text: newComment, profilePic: '/img/Yunus.PNG', timestamp: 'just now' }]);
      setNewComment('');
    }
  };

  return (
    <div className="App">
      <div className="card">
        
        <div className="post">
        <PostHeader />
          <p>GAMEON PUBG: BATTLEGROUNDS Turnuvası'nda ŞAMPİYON ORGLESS!</p>
          <p>Turnuvamızda mücadele eden ve çorba parasını çıkarmaya çalışan tüm takımlarımıza sonsuz teşekkürler ve tebrikler! 👏</p>
          <p>Eternal Fire'a IEM Cologne 2024'te başarılar dileriz!</p>
          <img src='/img/Yunus.PNG' alt="Game ON" className="post-image" />
          <div className="interaction-bar">
            <div className="likes">
              <span role="img" aria-label="like">❤️</span> 62
            </div>
            <div className="comments-button" onClick={() => setShowComments(!showComments)}>
              <span role="img" aria-label="comments">💬</span> {comments.length}
            </div>
          </div>
        </div>

        {showComments && (
          <CommentsSection comments={comments} newComment={newComment} setNewComment={setNewComment} addComment={addComment} />
        )}
      </div>
    </div>
  );
}

export default App;
