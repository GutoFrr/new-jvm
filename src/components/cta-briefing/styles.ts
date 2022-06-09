import styled from 'styled-components'
import { Button } from '../../styles/components/button'

export const Container = styled.div`
  width: 1170px;
  height: 336px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 132px;
`

export const BriefingTitle = styled.h2`
  font: 300 36px 'Roboto', sans-serif;
  line-height: 42px;
  color: ${props => props.theme.colors.blackText};
  width: 240px;
`

export const BriefingButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 24px;
`

export const BriefingButton = styled(Button)`
  background-image: linear-gradient(
    225deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secundary} 100%
  );
  border: none;
  color: ${props => props.theme.colors.whiteText};
  width: 160px;
  height: 60px;
  border-radius: 30px;
`

export const ContactButton = styled(Button)`
  background-image: linear-gradient(
    225deg,
    ${props => props.theme.colors.terciary} 45%,
    ${props => props.theme.colors.quaternary} 145%
  );
  border: none;
  color: ${props => props.theme.colors.whiteText};
  width: 160px;
  height: 60px;
  border-radius: 30px;
`
