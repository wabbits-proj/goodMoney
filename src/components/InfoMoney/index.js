import React from 'react';

import { 
  Container, 
  Left, 
  Center, 
  Right,
  ProgressBar,
  Progress,
  TxtProgress,
  LabelCredit,
  TxtLabel,
  BtnEdit,
  TxtBtnEdit,
  Txt
} from './styles';

export default function InfoMoney() {
  return (
    <>
      <Container>
        <Left>
          <Txt color="#42AB9E">Saldo</Txt>
          <Txt color="#42AB9E">R$ 1.256,00</Txt>
        </Left>
        <Center>
          <Txt color="#AA4343">Gastos</Txt>
          <Txt color="#AA4343">R$ 300,00</Txt>
        </Center>
        <Right>
          <Txt color="#4373A8">Prox. mês</Txt>
          <Txt color="#4373A8">R$ 100,00</Txt>
        </Right>        
      </Container>
      <LabelCredit>
        <TxtLabel color="#4F4F4F" align="left">Saldo total: R$ 856,00</TxtLabel>
        <TxtLabel color="#828282" align="right">Meta: R$ 3.500,00</TxtLabel>
      </LabelCredit>
      <ProgressBar>
        <Progress percent={30} />
        <TxtProgress>Resta R$ 999.999.999,99</TxtProgress>
      </ProgressBar>
      <BtnEdit>
        <TxtBtnEdit>EDITAR META</TxtBtnEdit>
      </BtnEdit>
    </>
  );
}
