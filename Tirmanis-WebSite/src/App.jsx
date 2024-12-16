import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Games from './Pages/Games';
import News from './Pages/News';
import ScrollButton from './components/molecules/ScrollButton';
const App = () => {
  return (
    <Router>
      <ScrollButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:game" element={<Games />} />
        <Route path="/news/:gameType" element={<News />} />
        
      </Routes>
    </Router>
  );
};

export default App;
