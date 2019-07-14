import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { format } from 'date-fns';
import { getHistoricMonth } from "~/services/firebase";
import { getItem } from '~/services/storage';

import { Container, Title, TxtMonth, ViewTable, RowTable, ColTable, Txt } from './styles';

export default function HistFinances() {
  useEffect(async () => {
    let user = await getItem('user');
    getHistoricMonth(6, 2019, user.id);
    
  }, [null]);

  return (
    <Container>
      <Title>Histórico financeiro</Title>
      <TxtMonth>Mês: {format(new Date(), 'MMMM')}</TxtMonth>

      <ViewTable>
        <RowTable>
          <ColTable><Text fontSize="14">Data: </Text></ColTable>
          <ColTable><Text fontSize="14">Valor: </Text></ColTable>
          <ColTable><Text fontSize="14">Parcela: </Text></ColTable>
          <ColTable><Text fontSize="14">Descrição: </Text></ColTable>
        </RowTable>

        <RowTable>
          <ColTable><Txt fontSize="12">05/07/2019</Txt></ColTable>
          <ColTable><Txt fontSize="12">+ R$ 1.200,00</Txt></ColTable>
          <ColTable><Txt fontSize="12">Não se aplica</Txt></ColTable>
          <ColTable><Txt fontSize="12">Salário</Txt></ColTable>
        </RowTable>
        <RowTable>
          <ColTable><Txt fontSize="12">05/07/2019</Txt></ColTable>
          <ColTable><Txt fontSize="12">+ R$ 1.200,00</Txt></ColTable>
          <ColTable><Txt fontSize="12">Não se aplica</Txt></ColTable>
          <ColTable><Txt fontSize="12">Salário</Txt></ColTable>
        </RowTable>
        <RowTable>
          <ColTable><Txt fontSize="12">05/07/2019</Txt></ColTable>
          <ColTable><Txt fontSize="12">+ R$ 1.200,00</Txt></ColTable>
          <ColTable><Txt fontSize="12">Não se aplica</Txt></ColTable>
          <ColTable><Txt fontSize="12">Salário</Txt></ColTable>
        </RowTable>        
      </ViewTable>
    </Container>
  );
}
