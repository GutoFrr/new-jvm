import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    225deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secundary} 100%
  );
  margin-top: -110px;

  .hero {
    width: 1170px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-text {
    width: 615px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .hero-title {
      font: 700 112px 'Roboto', sans-serif;
      line-height: 110px;
      color: ${props => props.theme.colors.whiteText};
      margin-bottom: 54px;
    }

    .hero-subtitle {
      font: 400 20px 'Roboto', sans-serif;
      line-height: 29px;
      color: ${props => props.theme.colors.whiteText};
      margin-bottom: 54px;
    }
  }

  .hero-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .filled-btn {
    width: 150px;
    height: 50px;
    background: linear-gradient(
      225deg,
      ${props => props.theme.colors.secundary} 0%,
      ${props => props.theme.colors.primary} 100%
    );
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.3);
    font: 500 14px 'Roboto', sans-serif;
    color: ${props => props.theme.colors.whiteText};
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }

  .unfilled-btn {
    width: 150px;
    height: 50px;
    background: transparent;
    font: 500 14px 'Roboto', sans-serif;
    color: ${props => props.theme.colors.whiteText};
    border: 1px solid ${props => props.theme.colors.whiteText};
    border-radius: 25px;
    cursor: pointer;
  }

  .iphones {
    position: absolute;
    right: 10vw;
    top: 218px;
  }
`
