import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: 24px;
  }
`
