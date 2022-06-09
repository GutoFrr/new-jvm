import React from 'react'
import {
  BriefingButton,
  BriefingButtons,
  BriefingTitle,
  ContactButton,
  Container
} from './styles'

const CTABriefing = () => {
  return (
    <Container>
      <BriefingTitle>
        Confira nosso <strong>briefing rápido</strong>
      </BriefingTitle>
      <BriefingButtons>
        <BriefingButton>Briefing</BriefingButton>
        <ContactButton>Contato</ContactButton>
      </BriefingButtons>
    </Container>
  )
}

export default CTABriefing
