import React from 'react'
import { tableData } from './data'
import {
  Container,
  DetailItem,
  Plan,
  PlanBorder,
  PlanButton,
  PlanDetails,
  PlanTitle,
  Price
} from './styles'

const Plans = () => {
  return (
    <Container>
      {tableData.map((item, key) => (
        <PlanBorder key={key}>
          <Plan>
            <PlanTitle>
              <h5>{item.planTitle}</h5>
              <p>Preços iniciando em</p>
              <Price>
                <h4>10x</h4>
                <h3>{item.price}</h3>
              </Price>
            </PlanTitle>
            <PlanDetails>
              <DetailItem>{item.details[0]}</DetailItem>
              <DetailItem>{item.details[1]}</DetailItem>
              <DetailItem>{item.details[2]}</DetailItem>
            </PlanDetails>
            <PlanButton>Marcar reunião</PlanButton>
          </Plan>
        </PlanBorder>
      ))}
    </Container>
  )
}

export default Plans
