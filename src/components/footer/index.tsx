import React from 'react'
import { Container, Copyright, LinkItem, Links, LinksList } from './styles'

const Footer = () => {
  return (
    <Container>
      <Links>
        <LinksList>
          <LinkItem></LinkItem>
        </LinksList>
      </Links>
      <Copyright>
        © Copyright 2022 — All rights reserved — JVM by
        <strong> Kallarari</strong>
      </Copyright>
    </Container>
  )
}

export default Footer
