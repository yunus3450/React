import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../../redux/slices/productSlice';
import Button from '../../atoms/Button/Button';
import styles from './CategoryFilter.module.css';
const categories = ["All","Electronics","Clothing","Accessories"];

const CategoryFilter = () => {
    const dispatch = useDispatch();
    const activeCategory = useSelector((state) => state.products.category);

  return (
    <div className={styles.filter}>
      {categories.map((category) =>(
        <Button
        key={category}
        onClick={() => dispatch(setCategory(category))}
        active={activeCategory===category}>
            {category}
        </Button>
      ))}
    </div>
  )
}

export default CategoryFilter
