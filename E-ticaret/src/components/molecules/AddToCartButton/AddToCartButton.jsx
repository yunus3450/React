import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/slices/cartSlice';
import Button from '../../atoms/Button/Button';
const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
  };

  return (
    <Button onClick={handleAddToCart}>
      Sepete Ekle
    </Button>
  );
};

export default AddToCartButton;
