import React, { useEffect, useState } from 'react';
import { Text, ListView } from 'react-native';
import { format } from 'date-fns';
import { getHistoricMonth } from "~/services/firebase";
import { getItem } from '~/services/storage';

import { Container, Title, TxtMonth, ViewTable, RowTable, ColTable, Txt } from './styles';

export default function HistFinances() {
  const [data, setData] = useState([]);

  async function getHistFinances(){
    let user = await getItem('user');
    getHistoricMonth('07', 2019, user.id)
    .then(res => {
      setData(res);
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    getHistFinances();
  }, []);

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

        {data.map((row, index) => (
          <RowTable key={index}>
            <ColTable><Txt fontSize="12">{row.date}</Txt></ColTable>
            <ColTable><Txt fontSize="12">{(row.type=='credit') ? '+' : '-'} R$ {row.value}</Txt></ColTable>
            <ColTable><Txt fontSize="12">{row.portion || 'Não se aplica'}</Txt></ColTable>
            <ColTable><Txt fontSize="12">{row.description}</Txt></ColTable>
          </RowTable>
        ))}
      </ViewTable>
    </Container>
  );
}
