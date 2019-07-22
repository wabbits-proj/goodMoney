import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import ModalObjective from '~/components/ModalObjective';
import { setObjective } from '~/store/actions/todo';
import { getItem } from '~/services/storage';

export default function InfoMoney() {
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todo);
  
  const [visible, setVisible] =  useState(false);

  useEffect(async() => {
    // let user = await getItem('user');
    // dispatch(setObjective(user.objective));

  }, []);

  function closeModal(){
    setVisible(false);
  }

  function getCreditUser(){

  }

  useEffect(() => {
    getCreditUser();
  }, []);

  return (
    <>
      <Container>
        <Left>
          <Txt color="#42AB9E">Saldo</Txt>
          <Txt color="#42AB9E">R$ {todo.credit}</Txt>
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
        <TxtLabel color="#828282" align="right">Meta: R$ {todo.objective}</TxtLabel>
      </LabelCredit>
      <ProgressBar>
        <Progress percent={30} />
        <TxtProgress>Resta R$ 999.999.999,99</TxtProgress>
      </ProgressBar>
      <BtnEdit
        onPress={() => setVisible(true)}
      >
        <TxtBtnEdit>EDITAR META</TxtBtnEdit>
      </BtnEdit>      
      <ModalObjective visible={visible} funcClose={() => closeModal()} />
    </>
  );
}
