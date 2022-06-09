import React from 'react'
import { ContactButton, Container } from './styles'
import { menuItems } from './data'

import headerLogo from '../../public/header/HeaderLogo.png'

const Header = () => {
  return (
    <Container>
      <div className="header">
        <img src={headerLogo} alt="Logo JVM Header" className="header-logo" />
        <div className="menu">
          <ul className="menu-items">
            {menuItems.map((item, key) => (
              <a href="" className="menu-link" key={key}>
                <li className="menu-item">{item.name}</li>
              </a>
            ))}
          </ul>
          <ContactButton>Contato</ContactButton>
        </div>
      </div>
    </Container>
  )
}

export default Header
