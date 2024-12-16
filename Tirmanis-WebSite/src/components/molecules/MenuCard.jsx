import React from 'react'

const MenuCard = ({href, name}) => {
  return (
    
        <li className="nav-item">
          <a className="nav-link text-white" href={href}>{name}</a>
        </li>
        
  )
}

export default MenuCard
