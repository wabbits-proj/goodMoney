import React from 'react';
import { Text } from 'react-native';

import { Container, Title, TxtMonth, ViewTable, RowTable, ColTable, Txt } from './styles';

export default function HistFinances() {
  return (
    <Container>
      <Title>Histórico financeiro</Title>
      <TxtMonth>Mês: Julho</TxtMonth>

      <ViewTable>
        <RowTable>
          <ColTable><Text fontSize="16">Data: </Text></ColTable>
          <ColTable><Text fontSize="16">Valor: </Text></ColTable>
          <ColTable><Text fontSize="16">Parcela: </Text></ColTable>
          <ColTable><Text fontSize="16">Descrição: </Text></ColTable>
        </RowTable>

        <RowTable>
          <ColTable><Txt fontSize="14">05/07/2019</Txt></ColTable>
          <ColTable><Txt fontSize="14">+ R$ 1.200,00</Txt></ColTable>
          <ColTable><Txt fontSize="14">Não se aplica</Txt></ColTable>
          <ColTable><Txt fontSize="14">Salário</Txt></ColTable>
        </RowTable>
        <RowTable>
          <ColTable><Txt fontSize="14">05/07/2019</Txt></ColTable>
          <ColTable><Txt fontSize="14">+ R$ 1.200,00</Txt></ColTable>
          <ColTable><Txt fontSize="14">Não se aplica</Txt></ColTable>
          <ColTable><Txt fontSize="14">Salário</Txt></ColTable>
        </RowTable>
        <RowTable>
          <ColTable><Txt fontSize="14">05/07/2019</Txt></ColTable>
          <ColTable><Txt fontSize="14">+ R$ 1.200,00</Txt></ColTable>
          <ColTable><Txt fontSize="14">Não se aplica</Txt></ColTable>
          <ColTable><Txt fontSize="14">Salário</Txt></ColTable>
        </RowTable>
        
      </ViewTable>
    </Container>
  );
}
