import React from 'react'
import { footerData } from './data'
import {
  Container,
  Copyright,
  LinkItem,
  Links,
  LinksList,
  LinkTitle
} from './styles'

const Footer = () => {
  return (
    <Container>
      <Links>
        {footerData.map((item, key) => (
          <LinksList key={key}>
            <LinkTitle>
              <strong>{item.linkTitle}</strong>
            </LinkTitle>
            <LinkItem>{item.linkItems[0]}</LinkItem>
            <LinkItem>{item.linkItems[1]}</LinkItem>
            <LinkItem>{item.linkItems[2]}</LinkItem>
          </LinksList>
        ))}
      </Links>
      <Copyright>
        © Copyright 2022 — All rights reserved — JVM by
        <strong> Kallarari</strong>
      </Copyright>
    </Container>
  )
}

export default Footer
