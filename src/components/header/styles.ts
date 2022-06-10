import styled from 'styled-components'
import { Button } from '../../styles/components/button'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 44px;

  .header {
    width: 80vw;
    max-width: 1170px;
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-logo {
    user-select: none;
  }

  .menu {
    width: 427px;
    height: 66px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .menu-items {
      width: 239px;
      height: 66px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      list-style: none;
    }

    .menu-link {
      font: 500 14px 'Roboto', sans-serif;
      color: ${props => props.theme.colors.whiteText};
      text-decoration: none;
    }
  }
`

export const ContactButton = styled(Button)`
  background: linear-gradient(
    45deg,
    ${props => props.theme.colors.terciary} 0%,
    ${props => props.theme.colors.quaternary} 100%
  );

  :hover {
    width: 160px;
    height: 57px;
    border-radius: 35px;
  }
`
