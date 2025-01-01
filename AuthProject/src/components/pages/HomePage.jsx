import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="container mt-5">
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <div>
          <h1>Welcome to the Home Page</h1>
          <p>Please log in or register to access more features.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
