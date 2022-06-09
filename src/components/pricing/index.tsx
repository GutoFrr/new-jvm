import React from 'react'
import { Background, Container, PrincingTitle } from './styles'
import Plans from './plans'

const Pricing = () => {
  return (
    <Container>
      <Background />
      <PrincingTitle>
        <h2>
          Um Sério <strong>Investimento</strong>
        </h2>
        <h6>
          Investimento com alto retorno, e amplas articulação no pagamento,
          podendo ser por parcelamento, boleto, pix, transferência, a vista ou a
          prazo.
        </h6>
      </PrincingTitle>
      <Plans />
    </Container>
  )
}

export default Pricing
