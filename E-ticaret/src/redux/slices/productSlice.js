import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000, image: '/images/laptop.jpg' },
    { id: 2, name: 'Shirt', category: 'Clothing', price: 50, image: '/images/shirt.jpg' },
    { id: 3, name: 'Phone', category: 'Electronics', price: 800, image: '/images/phone.jpg' },
    { id: 4, name: 'Pants', category: 'Clothing', price: 60, image: '/images/pants.jpg' },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200, image: '/images/watch.jpg' },
  ],
  filteredItems: [],
  category: 'All',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      if (action.payload === 'All') {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(
          (item) => item.category === action.payload
        );
      }
    },
    initializeProducts: (state) => {
      state.filteredItems = state.items;
    },
  },
});

export const { setCategory, initializeProducts } = productSlice.actions;
export default productSlice.reducer;
