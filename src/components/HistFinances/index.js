import React from 'react';
import { Text } from 'react-native';

import { Container, Title, TxtMonth, ViewTable, RowTable, ColTable } from './styles';

export default function HistFinances() {
  return (
    <Container>
      <Title>Histórico financeiro</Title>
      <TxtMonth>Mês: Julho</TxtMonth>

      <ViewTable>
        <RowTable>
          <ColTable><Text>Data: </Text></ColTable>
          <ColTable><Text>Valor: </Text></ColTable>
          <ColTable><Text>Parcela: </Text></ColTable>
          <ColTable><Text>Descrição: </Text></ColTable>
        </RowTable>

        <RowTable>
          <ColTable><Text style={{ fontSize: 10 }}>05/07/2019</Text></ColTable>
          <ColTable><Text style={{ fontSize: 10 }}>+ R$ 1.200,00</Text></ColTable>
          <ColTable><Text style={{ fontSize: 10 }}>Não se aplica</Text></ColTable>
          <ColTable><Text style={{ fontSize: 10 }}>Salário</Text></ColTable>
        </RowTable>
        <RowTable>
          <ColTable><Text style={{ fontSize: 10 }}>05/07/2019</Text></ColTable>
          <ColTable><Text style={{ fontSize: 10 }}>+ R$ 1.200,00</Text></ColTable>
          <ColTable><Text style={{ fontSize: 10 }}>Não se aplica</Text></ColTable>
          <ColTable><Text style={{ fontSize: 10 }}>Salário</Text></ColTable>
        </RowTable>
        <RowTable>
          <ColTable><Text style={{ fontSize: 10 }}>05/07/2019</Text></ColTable>
          <ColTable><Text style={{ fontSize: 10 }}>+ R$ 1.200,00</Text></ColTable>
          <ColTable><Text style={{ fontSize: 10 }}>Não se aplica</Text></ColTable>
          <ColTable><Text style={{ fontSize: 10 }}>Salário</Text></ColTable>
        </RowTable>
        
      </ViewTable>
    </Container>
  );
}
