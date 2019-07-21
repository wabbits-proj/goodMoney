import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { format, addMonths, parse } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getHistoric } from '~/store/actions/todo';
import { insertChild } from '~/services/firebase';
import { getItem } from '~/services/storage';
import { valueMoney, validNumber, valueDate } from "~/services/utils";
import { Container, Row, Text, TextInput, BtnAdd, TxtBtnAdd, ViewBtnDebit, BtnDebit } from './styles';

export default function FormAdd({ typeForm }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [portion, setPortion] = useState('');
  const [icon, setIcon] = useState(null);
  const [iconNext, setIconNext] = useState(null);

  function buttonSelected(btn){
    if(btn == 'next'){
      setIconNext(<Icon name="check-circle"/>);
      setIcon(null);
    } else{
      setIcon(<Icon name="check-circle"/>);
      setIconNext(null);
    }  
  }

  async function addCredit(){
    let user = await getItem('user');
    insertChild(`hist/${user.id}/credit`, format(new Date(), 'YYYY'), {
      value,
      description,
      date: format(new Date(), 'D/MM/YYYY'),
      month: format(new Date(), 'MM'),
    })
    .then(res => {
      alert('Sucesso');
      setValue('');
      setDescription('');
      dispatch(getHistoric());
    })
    .catch(err => {
      console.log(err);
    });
  }

  async function addDebit(){
    let valueFormated = value.split('.').join('').split(',').join('.');
    let valuePortion = (portion > 1) ? valueMoney(parseFloat((valueFormated / portion)).toFixed(2).toString()) : value;
    let dt = (icon) ? date :  format(addMonths(new Date(), 1), 'D/MM/YYYY');
    let user = await getItem('user');
    let promiseList = new Promise((resolve, reject) => {
      for(let i=0; i<parseInt(portion); i++){
        let arrayMonth = dt.split('/');
        let dateTrated = addMonths(parse(`${arrayMonth[2]}-${arrayMonth[1]}-${arrayMonth[0]}`), i);
        let dateFormate = format(dateTrated, 'D/MM/YYYY');
        
        insertChild(`hist/${user.id}/debit`, format(new Date(), 'YYYY'), {
          value: valuePortion,
          description,
          date: dateFormate,
          month: format(dateTrated, 'MM'),
          portion: `${i+1}/${portion}`
        })
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
      }
    });

    Promise.all([promiseList])
    .then(data => {
      alert('Sucesso');
      setValue('');
      setDescription('');
      setDate('');
      setPortion('');
      dispatch(getHistoric());
    })
    .catch(error => {
      console.log(error);
      alert('Erro');
    })
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
              onChangeText={(text) => setValue(valueMoney(text))}
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
            <TextInput 
              color="#AA4343" 
              value="200.000,00"
              value={value} 
              onChangeText={(text) => setValue(valueMoney(text))}
            />
          </Row>
          <Row>
            <Text>Data: </Text>
            <TextInput 
              color="#AA4343" 
              value="22/07/2019"
              value={date} 
              onChangeText={(text) => setDate(valueDate(text))}
            />
          </Row>
          <Row>
            <Text>Parcelas: </Text>
            <TextInput 
              color="#AA4343" 
              value="3"
              value={portion} 
              onChangeText={(text) => setPortion(validNumber(text))}
            />
          </Row>
          <Row>
            <Text>Descrição: </Text>
            <TextInput 
              color="#AA4343" 
              value="Termo"
              value={description} 
              onChangeText={(text) => setDescription(text)}
            />
          </Row>
          <ViewBtnDebit>
            <BtnDebit
              background="#AA4343"
              onPress={() => buttonSelected('this')}
            >
              <TxtBtnAdd>Este mês {icon && icon}</TxtBtnAdd>
            </BtnDebit>
            <BtnDebit
              background="#4373A8"  
              onPress={() => buttonSelected('next')}
            >
              <TxtBtnAdd>Prox mês {iconNext && iconNext}</TxtBtnAdd>
            </BtnDebit>
          </ViewBtnDebit>
          <BtnAdd 
            background="#AA4343"
            margin="0.1%"  
            onPress={() => addDebit()}
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
