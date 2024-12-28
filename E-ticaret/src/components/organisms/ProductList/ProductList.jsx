import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import styles from './ProductList.module.css';

const ProductList = () => {
  const products = useSelector((state) => state.products.filteredItems);

  return (
    <div className={styles.list}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
