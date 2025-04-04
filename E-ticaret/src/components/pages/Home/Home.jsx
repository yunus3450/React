import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeProducts } from '../../../redux/slices/productSlice';
import CategoryFilter from '../../organisms/CategoryFilter/CategoryFilter';
import ProductList from '../../organisms/ProductList/ProductList';
import Cart from '../Cart/Cart';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>E-Ticaret Sitesi</h1>
      
      <CategoryFilter />
      <ProductList />
      <Cart></Cart>
    </div>
  );
};

export default Home;
