import React, { useState } from 'react';
import { Animated, StyleSheet } from 'react-native';

import FormAdd from '~/components/FormAdd';
import { Col, Btn, TxtBtn } from './styles';
import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export default function Footer() {
  const [visible, setVisible] = useState(true);
  const [form, setForm] = useState(null);
  const height = new Animated.Value(heightPercentageToDp('7%'));

  function onBtnPressDebit(){
    Animated.timing(height, {
      toValue: heightPercentageToDp('50%'),
      duration: 1000
    }).start();

    setTimeout(() => {
      setVisible(false);  
      setForm(<FormAdd typeForm="addDebit" />);  
    }, 1000);
  }

  function onBtnPressCredit(){
    Animated.timing(height, {
      toValue: heightPercentageToDp('50%'),
      duration: 1000
    }).start();
    
    setTimeout(() => {
      setVisible(false);    
      setForm(<FormAdd typeForm="addCredit" />);  
    }, 1000);
  }

  return (
    <Animated.View style={[styles.container, { height: height }]}>
      {
        (visible) ?
        <>
          <Col>
            <Btn 
              background="#AA4343"
              onPress={onBtnPressDebit}
            >
              <TxtBtn>Gasto</TxtBtn>
            </Btn>
          </Col>
          <Col>
            <Btn 
              background="#42AB9E"
              onPress={onBtnPressCredit}
            >
              <TxtBtn>Ganho</TxtBtn>
            </Btn>
          </Col>
        </>
        : form
      }      
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDp('100%'),
    // height: heightPercentageToDp('7%'), 
    marginLeft: widthPercentageToDp('5%'),
    marginRight: widthPercentageToDp('5%'),
    alignSelf: 'center', 
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',  
    elevation: 50,
    zIndex: 5,
  }
});