import React from 'react'

const Button = ({type= 'button',onClick,children,className}) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default Button
