import { faCartPlus, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <header>
        <FontAwesomeIcon icon={faHome} className='home-icon'/>
        <h3>Welcome</h3>
        <FontAwesomeIcon icon={faCartPlus} className='cart-icon'/>
    </header>
  )
}

export default Header