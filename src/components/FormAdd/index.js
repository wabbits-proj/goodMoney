import React, { useState } from 'react';
import { format } from 'date-fns';

import { insertChild } from '~/services/firebase';
import { getItem } from '~/services/storage';
import { Container, Row, Text, TextInput, BtnAdd, TxtBtnAdd } from './styles';

export default function FormAdd({ typeForm }) {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  async function addCredit(){
    let user = await getItem('user');
    insertChild('credit', user.id, {
      value,
      description,
      date: format(new Date(), 'D/M/YYYY')
    })
    .then(alert('Sucessp'))
    .catch(err => {
      console.log(err);
    });
  }

  function renderFormType(){
    if(typeForm == 'addCredit'){
      return (
        <>
          <Row>
            <Text>Valor: </Text>
            <TextInput 
              color="#42AB9E" 
              value={value} 
              onChangeText={(text) => setValue(text)}
            />
          </Row>
          <Row>
            <Text>Descrição: </Text>
            <TextInput 
              color="#42AB9E" 
              value={description} 
              onChangeText={(text) => setDescription(text)}
            />
          </Row>
          <BtnAdd 
            background="#42AB9E"
            margin="32%" 
            onPress={() => addCredit()} 
          >
            <TxtBtnAdd>Adicionar ganho</TxtBtnAdd>
          </BtnAdd>
        </>
      );
    } else{
      return (
        <>
          <Row>
            <Text>Valor: </Text>
            <TextInput color="#AA4343" value="200.000,00"/>
          </Row>
          <Row>
            <Text>Data: </Text>
            <TextInput color="#AA4343" value="22/07/2019"/>
          </Row>
          <Row>
            <Text>Parcelas: </Text>
            <TextInput color="#AA4343" value="3"/>
          </Row>
          <Row>
            <Text>Descrição: </Text>
            <TextInput color="#AA4343" value="Termo"/>
          </Row>
          <BtnAdd 
            background="#AA4343"
            margin="20%"  
          >
            <TxtBtnAdd>Adicionar gasto</TxtBtnAdd>
          </BtnAdd>
        </>
      );
    }
  }

  return (
    <Container>
      {renderFormType()}
    </Container>
  );
}
