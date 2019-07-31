import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
  LabelCredit, 
  TxtLabel, 
  ProgressBar, 
  Progress, 
  TxtProgress,
  BtnEdit,
  TxtBtnEdit,
  Txt
} from './styles';

import ModalObjective from '~/components/ModalObjective';
import { valueMoney } from "~/services/utils";

export default function InfoProgress(props) {
  const todo = useSelector(state => state.todo);  
  const [visible, setVisible] =  useState(false);
  const [value, setValue] = useState('0');
  const [remain, setRemain] = useState('2,99');
  const [padding, setPadding] = useState('70');
  const [percent, setPercent] = useState(90);

  const arrayPadding = [
    '69', '69', '67', '65', '63', '61', 
    '59', '57', '55', '53', '51', '49', 
    '47', '45', '43', '41', '39', '37',
    '35', '33', '31', '29', '27', '25',
    '23', '21', '19', '17', '15', '13',
    '11', '9', '7', '5', '3', '1'
  ];

  useEffect(() => {
    creditUser();
  }, [todo.getHistoric, todo.objective]);

  function creditUser(){
    setValue(returnCont(todo.credit, todo.debitsMonth));
  } 

  function remainObjective(v){
    let cont = parseFloat(todo.objective.split('.').join('').split(',').join('.')) - parseFloat(v.split('.').join('').split(',').join('.')); 
    let val = 0
    if(cont >= 0){
      val = valueMoney(cont.toFixed(2).toString());
    } else{
      val = valueMoney('0');
    }
    setRemain(val);
    setPadding(arrayPadding[val.length]);  
  }
  
  function returnCont(value1, value2){
    let cont = parseFloat(value1.split('.').join('').split(',').join('.')) - parseFloat(value2.split('.').join('').split(',').join('.'));
    let val = valueMoney(cont.toFixed(2).toString());
    remainObjective(val);
    let per = ((100 / todo.objective.split('.').join('').split(',').join('.')) * cont.toFixed(2));
    if(per > 100){
      setPercent(100);
    } else{
      setPercent(per);
    }
    return val;  
  }

  return (
    <>
      <LabelCredit>
        <TxtLabel color="#4F4F4F" align="left">Saldo total: R$ {value}</TxtLabel>
        <TxtLabel color="#828282" align="right">Meta: R$ {todo.objective}</TxtLabel>
      </LabelCredit>
      <ProgressBar>
        <Progress percent={percent} />
        <TxtProgress padding={padding}>Resta R$ {remain}</TxtProgress>
      </ProgressBar>
      <BtnEdit
        onPress={() => setVisible(true)}
      >
        <TxtBtnEdit>EDITAR META</TxtBtnEdit>
      </BtnEdit>      
      <ModalObjective visible={visible} funcClose={() => setVisible(false)} />
    </>
  );
}
