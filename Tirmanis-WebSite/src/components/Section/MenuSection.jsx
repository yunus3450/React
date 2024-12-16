import React from 'react'
import MenuCard from '../molecules/MenuCard'

const MenuSection = ({menuInfo}) => {
  return (
    <nav>
      <ul className="nav">
      {menuInfo.map((menu, index) => (
        <MenuCard
          key={index}
          href={menu.href}
          name = {menu.name}
        />
      ))}
      </ul>
    </nav>
  )
}

export default MenuSection