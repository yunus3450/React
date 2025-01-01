import React from 'react';

const AuthTemplate = ({ title, children }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{title}</h1>
      <div className="d-flex justify-content-center">
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
