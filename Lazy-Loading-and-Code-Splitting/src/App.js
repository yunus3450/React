import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Sayfaları Lazy Load Etme
const Home = lazy(() => import("./components/Home"));
const Tasks = lazy(() => import("./components/Tasks"));
const Settings = lazy(() => import("./components/Settings"));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/tasks">Görevler</Link>
        <Link to="/settings">Ayarlar</Link>
      </nav>

      {/* Sayfalar yüklenirken bir bekleme ekranı göstermek için Suspense kullanıyoruz */}
      <Suspense fallback={<div>Sayfa Yükleniyor...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
