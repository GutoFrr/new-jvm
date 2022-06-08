import { Icon } from '@iconify/react'
import React from 'react'
import { featuresItems, tabsItems } from './data'
import { Container } from './styles'

const Features = () => {
  return (
    <Container>
      <ul className="tabs">
        {tabsItems.map((item, key) => (
          <li className="tab-item" key={key}>
            {item.tab}
          </li>
        ))}
      </ul>
      <ul className="features">
        {featuresItems.map((item, key) => (
          <li className="feature-item" key={key}>
            <div className="icon-container">
              <Icon icon={item.icon} className="feature-icon" />
            </div>
            <div className="feature-info">
              <h3>{item.title}</h3>
              <h5>{item.text}</h5>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Features
