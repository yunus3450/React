import React, { useState, useEffect } from 'react';
import Logo from './atoms/Logo';
import MenuSection from './Section/menuSection';

const Header = ({ logo, filtered }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch('/src/assets/datas/menu-data.json');
      const data = await response.json();

      if (filtered) {
        const filteredMenu = data.filter(item => filtered.includes(item.id));
        setMenu(filteredMenu);
      } else {
        setMenu(data); 
      }
    };

    fetchMenu();
  }, [filtered]);

  return (
    <header className="bg-dark text-white py-3">
      <div className="container header-container">
        <div className="logo-container">
          <Logo Logo={logo} />
        </div>
        <div className="menu-container">
          <MenuSection menuInfo={menu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
