import styled from 'styled-components'
import { Title } from '../../styles/components/title'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-height: 1098px;
  padding-bottom: 239px;
`

export const Background = styled.div`
  width: 100vw;
  height: 1098px;
  background-color: ${props => props.theme.colors.sectionBackground};
  position: absolute;
  top: -270px;
  left: 0;
`

export const PrincingTitle = styled(Title)`
  width: 614px;
  height: 147px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 35px;
  z-index: 1;
  margin-bottom: 88px;
`
