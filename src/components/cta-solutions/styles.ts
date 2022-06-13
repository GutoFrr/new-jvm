import styled from 'styled-components'
import { Button } from '../../styles/components/button'
import { Title } from '../../styles/components/title'
import bgImage from '../../public/cta-solutions/bg-image.png'

export const Container = styled.div`
  width: 1170px;
  height: 704px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 5px;
  position: relative;
  margin-bottom: 150px;
`

export const BgImage = styled.div`
  width: 1170px;
  height: 704px;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${bgImage});
  mix-blend-mode: overlay;
  opacity: 0.3;
  z-index: 2;
`

export const Overlay = styled.div`
  width: 1170px;
  height: 704px;
  background-image: linear-gradient(225deg, #54a1e9 0%, #012242 100%);
  box-shadow: 0px 40px 80px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

export const CTATitle = styled(Title)`
  width: 570px;
  height: 236px;
  margin-bottom: 32px;
  z-index: 3;

  h2 {
    color: ${props => props.theme.colors.whiteText};
  }

  h6 {
    color: ${props => props.theme.colors.whiteText};
  }
`

export const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  margin-bottom: 60px;
  height: 60px;
`

export const FastBuildButton = styled(Button)`
  background-image: linear-gradient(
    45deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secundary} 100%
  );
  z-index: 3;
  width: 160px;
  height: 60px;
  border-radius: 30px;
`

export const ContactButton = styled(Button)`
  background-image: linear-gradient(
    225deg,
    ${props => props.theme.colors.terciary} 0%,
    ${props => props.theme.colors.quaternary} 100%
  );
  z-index: 3;
  width: 160px;
  height: 60px;
  border-radius: 30px;
`

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 3;

  h5 {
    font: 700 16px 'Roboto', sans-serif;
    line-height: 21px;
    color: ${props => props.theme.colors.whiteText};
  }

  h6 {
    font: 400 14px 'Roboto', sans-serif;
    line-height: 21px;
    color: ${props => props.theme.colors.whiteText};
  }
`

export const RatingList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 11px;
`

export const RatingItem = styled.li`
  width: 24px;
  height: 24px;
  cursor: pointer;

  .star {
    color: ${props => props.theme.colors.star};
    font-size: 20px;
  }
`
