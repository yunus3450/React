import React from 'react';

const Footer = () => {
  return (
     <footer className="bg-dark text-white py-3">
       <div className="container footer-container">
       <div className="row align-items-center">
          <div className="col-auto">
       <span className="footer-copy-text">Copyright © 2024 Riot Games, Inc. Her hakkı saklıdır.</span>
       </div>
       <div className="col-auto">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <a className="navbar-brand" href="#games">OYUNLAR</a>
       <a className="navbar-brand" href="#tournaments">TURNUVALAR</a>
       <a className="navbar-brand" href="#leaderboard">LİDERLİK TABLOSU</a>
       <a className="navbar-brand" href="#news">HABERLER</a>
       <a className="navbar-brand" href="#sss">S.S.S</a>
      </nav>
       </div >
       <div className="col-auto">
    
</div>
<div className="col-auto">
<a className="text-info text-decoration-none"href="https://www.riotgames.com/tr/privacy-notice-TR">
   Gizlilik Politikası
 </a>
       <span className="footer-copy-text">Çerez Tercihleri</span>
      
       </div>
</div>
</div>
     </footer>
   );
 };

 export default Footer;
