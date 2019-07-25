import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, addMonths } from 'date-fns';

import { 
  Container, 
  Left, 
  Center, 
  Right,
  Txt
} from './styles';

import { setObjective, setDebitsMonth, setDebitsNextMonth, setCredit, infoMoneyDone } from '~/store/actions/todo';
import { getItem } from '~/services/storage';
import { getDebitsMonthUser, getCreditMonthUser } from "~/services/firebase";
import { valueMoney } from "~/services/utils";

export default function InfoMoney() {
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todo);  

  async function getInfoMoneyUser(){
    let valueMonth = 0;
    let valueNextMonth = 0;
    let user = await getItem('user');
    dispatch(setObjective(user.objective)); 
    dispatch(infoMoneyDone(false));

    getCreditMonthUser(format(new Date(), 'MM'), format(new Date(), 'YYYY'), user.id)
      .then(credit => {
        dispatch(setCredit(valueMoney(credit.toString())));
      })
      .catch(err => {
      });
    
    getDebitsMonthUser(format(new Date(), 'MM'), format(new Date(), 'YYYY'), user.id)
      .then(data => {
        data.forEach((debit) => {
          let valueFormated = debit.value.split('.').join('').split(',').join('.');
          valueMonth = parseFloat(valueMonth) + parseFloat(valueFormated);
        });

        dispatch(setDebitsMonth(valueMoney(valueMonth.toString())));
      })
      .catch(err => {
        alert(JSON.stringify(err))
      });

      getDebitsMonthUser(format(addMonths(new Date(), 1), 'MM'), format(new Date(), 'YYYY'), user.id)
      .then(data => {
        data.forEach((debit) => {
          let valueFormated = debit.value.split('.').join('').split(',').join('.');
          valueNextMonth = parseFloat(valueNextMonth) + parseFloat(valueFormated);
        })

        dispatch(setDebitsNextMonth(valueMoney(valueNextMonth.toString())));
        dispatch(infoMoneyDone(true));
      })
      .catch(err => {
      });      
  }

  useEffect(() => {
    getInfoMoneyUser();
  }, [todo.getHistoric]);

  return (
    <>
      <Container>
        <Left>
          <Txt color="#42AB9E">Saldo</Txt>
          <Txt color="#42AB9E">R$ {todo.credit}</Txt>
        </Left>
        <Center>
          <Txt color="#AA4343">Gastos</Txt>
          <Txt color="#AA4343">R$ {todo.debitsMonth}</Txt>
        </Center>
        <Right>
          <Txt color="#4373A8">Prox. mês</Txt>
          <Txt color="#4373A8">R$ {todo.debitsNextMonth}</Txt>
        </Right>        
      </Container>
    </>
  );
}
