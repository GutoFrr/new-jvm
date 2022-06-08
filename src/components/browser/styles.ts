import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .browser {
    width: 996px;
    height: 747px;
    background-color: ${props => props.theme.colors.browserFrame};
    filter: drop-shadow(0px 30px 80px rgba(0, 0, 0, 0.2));
    border-radius: 10px;
    margin-top: 144px;
    margin-bottom: 169px;
    position: relative;
    z-index: 2;
  }

  .browser-img {
    width: 996px;
    height: 708px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    bottom: 0;
    user-select: none;
  }

  .dots {
    width: 996px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 12px;
  }

  .left-dots {
    display: flex;
    align-items: center;
    margin-right: auto;
    column-gap: 6px;
  }

  .dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.browserDot};
    cursor: pointer;
  }

  .dot:first-child {
    background-color: ${props => props.theme.colors.quintenary};
  }

  .browser-dots {
    position: absolute;
    bottom: 8.8%;
    left: 19.6%;
    z-index: 1;
    user-select: none;
  }
`
