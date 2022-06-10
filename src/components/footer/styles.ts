import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 441px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-top: 123px;
  border-top: 1px solid ${props => props.theme.colors.featureBorder};
`

export const Links = styled.div`
  width: 1170px;
  height: 181px;
  display: flex;
  justify-content: flex-start;
`

export const LinksList = styled.ul`
  list-style: none;
  width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LinkTitle = styled.li`
  font: 500 14px 'Roboto', sans-serif;
  color: ${props => props.theme.colors.blackText};
  line-height: 19px;
  cursor: pointer;
`

export const LinkItem = styled.li`
  font: 400 16px 'Roboto', sans-serif;
  color: ${props => props.theme.colors.grayText};
  line-height: 23px;
  cursor: pointer;
`

export const Copyright = styled.h6`
  font: 400 14px 'Roboto', sans-serif;
  line-height: 19px;
  color: ${props => props.theme.colors.grayText};
  width: 1170px;
`
