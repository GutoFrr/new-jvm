import React from 'react'
import { Container } from './styles'
import { Icon } from '@iconify/react'
import { Title } from '../../styles/title'

const Browser = () => {
  return (
    <Container>
      <div>
        <Title>
          <div className="icon-container">
            <Icon
              icon="ant-design:clock-circle-filled"
              className="title-icon"
            />
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
      </div>
    </Container>
  )
}

export default Browser
