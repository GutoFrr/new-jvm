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
  transition: all 0.3s;

  :hover {
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.5);
  }
`
