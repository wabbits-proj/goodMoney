import React from 'react';

import { Container, Row, Text, TextInput } from './styles';

export default function FormAdd({ typeForm }) {
  function renderFormType(){
    if(typeForm == 'addCredit'){
      return (
        <>
          <Row>
            <Text>Valor: </Text>
            <TextInput color="#828282" value="200.000,00"/>
          </Row>
          <Row>
            <Text>Descrição: </Text>
            <TextInput color="#828282" value="mega da virada"/>
          </Row>
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
