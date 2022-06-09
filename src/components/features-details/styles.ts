import styled from 'styled-components'
import { Title } from '../../styles/components/title'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 185px;
  padding-bottom: 250px;
  position: relative;

  .details-container {
    width: 1170px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 2;
  }

  .first-iphone-feature {
    width: 451px;
    height: 699px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .first-iphone {
    z-index: 3;
  }

  .first-dots {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
  }

  .section-bg {
    width: 100vw;
    height: 897px;
    background-color: ${props => props.theme.colors.sectionBackground};
    position: absolute;
    top: 120px;
    z-index: 1;
  }

  .second-iphone-feature {
    width: 453px;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .second-iphone {
    z-index: 3;
  }

  .second-dots {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
`

export const DetailsTitle = styled(Title)`
  width: 570px;
  height: 382px;
  align-items: flex-start;
  text-align: start;

  h2 {
    width: 375px;
  }
`
