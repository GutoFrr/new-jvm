import React from 'react'
import { Container, PortfolioButton, UnfilledButton } from './styles'

import iphone from '../../public/hero/iphone-1.png'

const Hero = () => {
  return (
    <Container>
      <div className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Sua solução WEB.</h1>
          <h5 className="hero-subtitle">
            Plataformas exclusivas, funcionais e de alto desempenho.
          </h5>
        </div>
        <div className="hero-btns">
          <PortfolioButton>Portfólio</PortfolioButton>
          <UnfilledButton>Montar meu site</UnfilledButton>
        </div>
        <img src={iphone} alt="Iphone Hero" className="iphone" />
      </div>
    </Container>
  )
}

export default Hero
