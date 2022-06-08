import React from 'react'
import { Container } from './styles'

import iphones from '../../public/hero/iphone.png'
import iphoneDots from '../../public/hero/iphone-dots.png'

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
          <button className="filled-btn">Portfólio</button>
          <button className="unfilled-btn">Montar meu site</button>
        </div>
      </div>
      <img src={iphoneDots} alt="Iphone Dots" className="iphone-dots" />
      <img src={iphones} alt="Iphones Hero" className="iphones" />
    </Container>
  )
}

export default Hero
