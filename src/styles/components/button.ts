import styled from 'styled-components'

export const Button = styled.button`
  width: 150px;
  height: 50px;
  font: 500 14px 'Roboto', sans-serif;
  color: ${props => props.theme.colors.whiteText};
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 25px;
  cursor: pointer;
`
