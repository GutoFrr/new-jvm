import styled from 'styled-components'
import { Button } from '../../../styles/components/button'

export const Container = styled.div`
  width: 1170px;
  height: 474px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`

export const Plan = styled.div`
  min-width: 360px;
  height: 474px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.colors.sectionBackground};
  border: 2px solid ${props => props.theme.colors.featureBorder};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    border: 2px solid transparent;
    box-shadow: 0px 40px 80px rgba(0, 0, 0, 0.3);
  }
`

export const PlanTitle = styled.div`
  h5 {
    font: 700 14px 'Roboto', sans-serif;
    line-height: 16px;
    letter-spacing: -0.318182px;
    color: ${props => props.theme.colors.grayText};
    text-transform: uppercase;
    padding-bottom: 6px;
  }

  p {
    font: 400 14px 'Roboto', sans-serif;
    line-height: 19px;
    color: ${props => props.theme.colors.grayText};
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    font: 300 20px 'Roboto', sans-serif;
    letter-spacing: -0.1px;
    padding-top: 9px;
    margin-right: 3px;
  }

  h3 {
    font: 300 34px 'Roboto', sans-serif;
    letter-spacing: -0.1px;
  }
`

export const PlanDetails = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 17px;
  list-style: none;
`

export const DetailItem = styled.li`
  font: 400 14px 'Roboto', sans-serif;
  line-height: 19px;
  color: ${props => props.theme.colors.grayText};
`

export const PlanButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.featureBorder};
  color: ${props => props.theme.colors.grayText};
  box-shadow: none;
  width: 160px;
  height: 60px;
  border-radius: 30px;
  transition: all 0.3s;
`

export const PlanBorder = styled.div`
  width: 358px;
  height: 474px;
  background-image: linear-gradient(
    90deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secundary} 100%
  );
  padding: 3px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  :hover {
    width: 370px;
    height: 484px;

    ${PlanButton} {
      background-image: linear-gradient(
        90deg,
        ${props => props.theme.colors.primary} 0%,
        ${props => props.theme.colors.secundary} 100%
      );
      border: none;
      color: ${props => props.theme.colors.whiteText};
    }

    ${Plan} {
      background-color: ${props => props.theme.colors.background};
    }
  }
`
