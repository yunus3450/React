import React from 'react';
import styles from './ProductCard.module.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <AddToCartButton product={product}/>
    </div>
  );
};

export default ProductCard;
