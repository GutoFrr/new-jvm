import React from 'react'
import { Icon } from '@iconify/react'
import { Container, DetailsTitle } from './styles'

import firstIphone from '../../public/features-details/first-iphone.png'
import firstDots from '../../public/features-details/first-dots.png'
import secondIphone from '../../public/features-details/second-iphone.png'
import secondDots from '../../public/features-details/second-dots.png'

const FeaturesDetails = () => {
  return (
    <Container>
      <div className="details-container">
        <div className="first-iphone-feature">
          <img
            src={firstIphone}
            alt="First Iphone JVM Site"
            className="first-iphone"
          />
          <img
            src={firstDots}
            alt="Dots First Iphone JVM Site"
            className="first-dots"
          />
        </div>
        <DetailsTitle>
          <div className="icon-container">
            <Icon icon="fa6-solid:user-group" className="title-icon" />
          </div>
          <h2>
            Desing incrível <strong>para home pages</strong>
          </h2>
          <h6>
            Em lojas e sites institucionais o que vai diferenciar você de seus
            concorrentes é o design exclusivo da JVM, estudamos a fundo a
            experiência de usuário e teoria das cores para deixarmos seu site o
            mais agradável e atraente possível.
          </h6>
        </DetailsTitle>
      </div>
      <div className="details-container">
        <DetailsTitle>
          <div className="icon-container">
            <Icon icon="ri:chat-smile-2-fill" className="title-icon" />
          </div>
          <h2>
            Lojas de <strong>alto desempenho</strong>
          </h2>
          <h6>
            Sistema de pagamento completo para você aceitar cartão, pix, boleto,
            parcelamento tudo do jeito que seu cliente deseja pagar. Tudo
            automatizado, desde o publicação do produto até o envio do produto.
          </h6>
        </DetailsTitle>
        <div className="second-iphone-feature">
          <img
            src={secondIphone}
            alt="Second Iphone JVM Site"
            className="second-iphone"
          />
          <img
            src={secondDots}
            alt="Dots Second Iphone JVM Site"
            className="second-dots"
          />
        </div>
      </div>
      <div className="section-bg"></div>
    </Container>
  )
}

export default FeaturesDetails
