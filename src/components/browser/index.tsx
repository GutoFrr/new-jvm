import React from 'react'
import { Container } from './styles'
import { Icon } from '@iconify/react'
import { Title } from '../../styles/title'

import colorSelection from '../../public/browser/color-selection.png'
import browserDots from '../../public/browser/browser-dots.png'

const Browser = () => {
  return (
    <Container>
      <Title>
        <div className="icon-container">
          <Icon icon="ant-design:clock-circle-filled" className="title-icon" />
        </div>
        <h2>
          Economize tempo e dinheiro com <strong>Montagem rápida JVM</strong>
        </h2>
        <h6>
          Temos uma página de montagem e desenvolvimento de aplicações web
          responsivas (para celular, tablet e computador) que possibilita que
          você monte o modelo do site que mais se adapta a sua empresa.
        </h6>
      </Title>
      <div className="browser">
        <div className="dots">
          <div className="left-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="dot"></div>
        </div>
        <img
          src={colorSelection}
          alt="Seleção de Cores Briefing JVM"
          className="browser-img"
        />
      </div>
      <img src={browserDots} alt="Browser Dots" className="browser-dots" />
    </Container>
  )
}

export default Browser
