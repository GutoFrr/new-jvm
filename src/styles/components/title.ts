import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 704px;
  height: 356px;

  .icon-container {
    width: 60px;
    height: 60px;
    background: linear-gradient(
      225deg,
      ${props => props.theme.colors.primary} 0%,
      ${props => props.theme.colors.quintenary} 100%
    );
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title-icon {
    width: 24px;
    height: 24px;
    color: ${props => props.theme.colors.background};
  }

  h2 {
    font: 300 48px 'Roboto', sans-serif;
    color: ${props => props.theme.colors.title};
    line-height: 57px;
  }

  h6 {
    font: 400 18px 'Roboto', sans-serif;
    color: ${props => props.theme.colors.subtitle};
    line-height: 26px;
    max-width: 570px;
  }
`
