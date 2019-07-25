import React, { useEffect, useState } from 'react';
import { Text, ListView } from 'react-native';
import { useSelector } from "react-redux";
import { format, parse } from 'date-fns';

import { getHistoricMonth } from "~/services/firebase";
import { getItem } from '~/services/storage';

import { Container, Title, TxtMonth, ViewTable, RowTable, ColTable, Txt } from './styles';

export default function HistFinances() {
  const todo = useSelector(state => state.todo);
  const [data, setData] = useState([]);

  async function getHistFinances(){
    let dtA = null;
    let dtB = null;
    let user = await getItem('user');
    getHistoricMonth(format(new Date(), 'MM'), format(new Date(), 'YYYY'), user.id)
    .then(res => {
      res.sort((a, b) => {
        dtA = a.date.split('/'); 
        dtB = b.date.split('/'); 
        
        dtA = parse(`${dtA[2]}-${dtA[1]}-${dtA[0]}`);
        dtB = parse(`${dtB[2]}-${dtB[1]}-${dtB[0]}`);

        if(dtA < dtB) return -1;
        if(dtA > dtB) return 1;
        return 0;
      });
      setData(res);
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    getHistFinances();
  }, [todo.getHistoric]);

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
