import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .tabs {
    list-style: none;
    width: 100vw;
    border-bottom: 1px solid ${props => props.theme.colors.featureBorder};
    border-radius: 1.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 120px;
  }

  .tab-item {
    width: 370px;
    height: 40px;
    cursor: pointer;
    transition: all 0.1s;

    :hover {
      border-bottom: 2px solid ${props => props.theme.colors.quintenary};
    }
  }

  .features {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-bottom: 181px;
  }

  .feature-item {
    width: 370px;
    height: 253px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      .icon-container {
        background-image: linear-gradient(
          225deg,
          ${props => props.theme.colors.primary} 0%,
          ${props => props.theme.colors.quintenary} 100%
        );
        box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.3);
        border: none;
      }

      .feature-icon {
        color: ${props => props.theme.colors.background};
      }
    }
  }

  .icon-container {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.featureBorder};
    box-shadow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .feature-icon {
    width: 34px;
    height: 34px;
    color: ${props => props.theme.colors.featureBorder};
    transition: all 0.3s;
  }

  .feature-info {
    width: 310px;

    h3 {
      font: 500 24px 'Roboto', sans-serif;
      line-height: 34px;
      color: ${props => props.theme.colors.title};
      margin-bottom: 5px;
    }

    h5 {
      font: 400 16px 'Roboto', sans-serif;
      line-height: 26px;
      color: ${props => props.theme.colors.subtitle};
    }
  }
`
