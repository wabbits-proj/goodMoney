import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-native";

import { Container, Content, Btn, TxtBtn, Row, Text, TextInput } from './styles';
import { setObjective } from "~/store/actions/todo";
import { valueMoney } from "~/services/utils";
import { insert } from "~/services/firebase";
import { getItem, setItem } from "~/services/storage";

export default function ModalObjective({ visible, funcClose }) {
  const todo = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(todo.objective);
  }, [visible]);

  async function updateObjective(){
    let data = {};
    let val = "";
    let user = await getItem('user');
    if(value){
      data = { ...user, objective: value };
      val = value;
    } else {
      data = { ...user, objective: todo.objective };
      val = todo.objective;
    }

    if(value != ""){
      insert(`users/${user.id}`, data)
      .then(res => {
        dispatch(setObjective(val));  
        funcClose();
        setValue(null);
        alert('Meta alterada com sucesso!');
        setItem('user', JSON.stringify(data)).then(data => {});
      })
      .catch(error => {
        alert('Erro ao editar meta!');
        funcClose();
      });
    } else{
      alert('Insira um valor!');
    }  
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
            onPress={() => { funcClose(); setValue(null) }}>
              <TxtBtn>CANCELAR</TxtBtn>
            </Btn>
          </Row>          
        </Content>
      </Container>
    </Modal>    
  );
}
