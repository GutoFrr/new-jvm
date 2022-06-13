import styled from 'styled-components'
import { Button } from '../../styles/components/button'

export const Container = styled.div`
  width: 100vw;
  height: 970px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    225deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secundary} 100%
  );
  margin-top: -110px;
  margin-bottom: 185px;

  .hero {
    width: 80vw;
    max-width: 1170px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-text {
    padding-top: 110px;
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
    height: 60px;
    margin-bottom: 50px;
  }

  .iphone {
    width: 32vw;
    min-width: 420px;
    position: absolute;
    right: 135px;
    top: 35vh;
  }

  @media screen and (max-width: 1280px) {
    .hero-text {
      .hero-title {
        font: 700 7vw 'Roboto', sans-serif;
        line-height: 100px;
      }

      .hero-subtitle {
        font: 400 18px 'Roboto', sans-serif;
        line-height: 24px;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .hero {
      align-items: center;
    }

    .hero-text {
      text-align: center;
      padding-top: 300px;
    }

    .iphone {
      position: static;
    }
  }

  @media screen and (max-width: 800px) {
    .hero-text {
      .hero-title {
        font: 700 70px 'Roboto', sans-serif;
        line-height: 80px;
        margin-bottom: 20px;
      }

      .hero-subtitle {
        font: 400 18px 'Roboto', sans-serif;
        line-height: 20px;
      }
    }
  }
`

export const PortfolioButton = styled(Button)`
  background: linear-gradient(
    225deg,
    ${props => props.theme.colors.secundary} 0%,
    ${props => props.theme.colors.primary} 100%
  );
`

export const UnfilledButton = styled(Button)`
  background: transparent;
  border: 1px solid ${props => props.theme.colors.whiteText};
  box-shadow: none;

  :hover {
    border: none;
    background: linear-gradient(
      45deg,
      ${props => props.theme.colors.terciary} 0%,
      ${props => props.theme.colors.quaternary} 100%
    );
  }
`
