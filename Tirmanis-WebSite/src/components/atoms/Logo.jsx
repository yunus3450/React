import React from 'react'

const Logo = ({Logo}) => {
    const logoSrc=`/src/assets/img/${Logo}.svg`
  return (
    <a href='/'>
        <img src={logoSrc}></img>
    </a>
  )
}

export default Logo
