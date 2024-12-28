import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id })); 
  };

  return (
    <div>
      <h1>Sepetim</h1>
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <p>{item.name}</p>
                  <p>${item.price} x {item.quantity}</p>
                </div>
                <button onClick={() => handleRemove(item.id)}>Kaldır</button>
              </li>
            ))}
          </ul>
          <h3>Toplam: ${totalAmount}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
