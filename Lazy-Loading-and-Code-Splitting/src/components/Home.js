import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>📌 Görev Yönetim Uygulamasına Hoş Geldiniz!</h1>
      <p>Bu uygulama ile görevlerinizi takip edebilir, ayarlarınızı düzenleyebilirsiniz.</p>
      
      <h2>Hızlı Erişim</h2>
      <ul>
        <li><Link to="/tasks">📋 Görev Listesi</Link></li>
        <li><Link to="/settings">⚙️ Ayarlar</Link></li>
      </ul>
    </div>
  );
}

export default Home;
