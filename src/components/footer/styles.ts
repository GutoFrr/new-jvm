import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 441px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-top: 1px solid ${props => props.theme.colors.featureBorder};
`

export const Links = styled.div`
  width: 1170px;
`

export const LinksList = styled.ul`
  list-style: none;
`

export const LinkItem = styled.li``

export const Copyright = styled.h6`
  font: 400 14px 'Roboto', sans-serif;
  line-height: 19px;
  color: ${props => props.theme.colors.grayText};
  width: 1170px;
`
