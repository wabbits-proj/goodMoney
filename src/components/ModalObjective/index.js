import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-native";

import { Container, Content, Btn, TxtBtn, Row, Text, TextInput } from './styles';
import { setObjective } from "~/store/actions/todo";
import { valueMoney } from "~/services/utils";
import { insert } from "~/services/firebase";
import { getItem } from "~/services/storage";

export default function ModalObjective({ visible, funcClose }) {
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todo);
  const [value, setValue] = useState(todo.objective);

  async function updateObjective(){
    let user = await getItem('user');
    insert(`users/${user.id}`, { ...user, objective: value })
      .then(data => {
        dispatch(setObjective(value));  
        funcClose();
        alert('Meta alterada com sucesso!');
      })
      .catch(error => {
        alert('Erro ao editar meta!');
        funcClose();
      });
  }

  return (
    <Modal
      visible={visible}
      transparent={true}
    >
      <Container>
        <Content>
          <Row>
            <Text>Meta</Text>
            <TextInput 
              value={value}
              keyboardType="number-pad"
              onChangeText={(text) => setValue(valueMoney(text))}
            />
          </Row>


          <Row>
            <Btn style={{ marginRight: 20 }}
              onPress={() => updateObjective()}
            >
              <TxtBtn>CONFIRMAR</TxtBtn>
            </Btn>
            <Btn 
            onPress={funcClose}>
              <TxtBtn>CANCELAR</TxtBtn>
            </Btn>
          </Row>          
        </Content>
      </Container>
    </Modal>    
  );
}
