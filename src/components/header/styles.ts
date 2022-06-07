import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 44px;

  .header {
    width: 1170px;
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu {
    width: 427px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .menu-items {
      width: 239px;
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

    .contact-btn {
      width: 150px;
      height: 50px;
      font: 500 14px 'Roboto', sans-serif;
      color: ${props => props.theme.colors.whiteText};
      background: linear-gradient(
        45deg,
        ${props => props.theme.colors.terciary} 0%,
        ${props => props.theme.colors.quaternary} 100%
      );
      box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.3);
      border: none;
      border-radius: 25px;
      cursor: pointer;
    }
  }
`
