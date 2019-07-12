import React from 'react';

import { 
  Container, 
  Left, 
  Center, 
  Right,
  TxtCredit,
  TxtDebit,
  TxtNextMonth,
  ProgressBar,
  Progress,
  TxtProgress,
  LabelCredit,
  TxtLabel,
  BtnEdit,
  TxtBtnEdit
} from './styles';

export default function InfoMoney() {
  return (
    <>
      <Container>
        <Left>
          <TxtCredit>Saldo</TxtCredit>
          <TxtCredit>R$ 1.256,00</TxtCredit>
        </Left>
        <Center>
          <TxtDebit>Gastos</TxtDebit>
          <TxtDebit>R$ 300,00</TxtDebit>
        </Center>
        <Right>
          <TxtNextMonth>Prox. mês</TxtNextMonth>
          <TxtNextMonth>R$ 100,00</TxtNextMonth>
        </Right>        
      </Container>
      <LabelCredit>
        <TxtLabel color="#4F4F4F" align="left">Saldo total: R$ 856,00</TxtLabel>
        <TxtLabel color="#828282" align="right">Meta: R$ 3.500,00</TxtLabel>
      </LabelCredit>
      <ProgressBar>
        <Progress percent={30} />
        {/* <TxtProgress>Resta</TxtProgress> */}
      </ProgressBar>
      <BtnEdit>
        <TxtBtnEdit>EDITAR META</TxtBtnEdit>
      </BtnEdit>
    </>
  );
}
