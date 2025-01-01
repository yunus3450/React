import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css'; 

const Header = () => {
  const cartItemsCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  ); 

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">E-Ticaret</Link>
      </div>
      <nav className="navigation">
        <Link to="/">Anasayfa</Link>
        <Link to="/cart">
          Sepetim ({cartItemsCount}) 
        </Link>
      </nav>
    </header>
  );
};

export default Header;
