import { Icon } from '@iconify/react'
import React from 'react'
import { ratingData } from './data'
import {
  BgImage,
  ContactButton,
  Container,
  CTAButtons,
  CTATitle,
  FastBuildButton,
  Overlay,
  RatingItem,
  RatingList,
  Review
} from './styles'

const CTASolutions = () => {
  return (
    <Container>
      <BgImage />
      <Overlay />
      <CTATitle>
        <h2>
          Solução perfeita para <strong>Startups</strong>
        </h2>
        <h6>
          Aplicações com bastante articulação no pagamento, unicas e com suporte
          de marketing completo, tudo para colocar sua idéia em prática de forma
          mais automatizada.
        </h6>
      </CTATitle>
      <CTAButtons>
        <FastBuildButton>Montagem Rápida</FastBuildButton>
        <ContactButton>Contato</ContactButton>
      </CTAButtons>
      <Review>
        <RatingList>
          {ratingData.map((item, key) => (
            <RatingItem key={key}>
              <Icon icon={item.star} className="star" />
            </RatingItem>
          ))}
        </RatingList>
        <h5>SEO e Assistência técnica</h5>
        <h6>Totalmente completo</h6>
      </Review>
    </Container>
  )
}

export default CTASolutions
