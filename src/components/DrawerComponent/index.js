import React from 'react';
import { DrawerItems,  SafeAreaView } from 'react-navigation';
import { Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getAdjustedFontSize, widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

import { Container, Header, Row } from './styles';

import { removeItem } from '~/services/storage';

export default function DrawerComponent(props) {
  function logoutUser(){
    removeItem('user')
    .then(res => {
      props.navigation.navigate('Auth')
    })
    .catch(err => {
    });
  }

  return (
    <Container>
      <Header>
        <Icon name="person" size={getAdjustedFontSize(108)} />
        <Text style={{ fontSize: getAdjustedFontSize(20), fontWeight: 'bold', fontFamily: 'AvenirLTStd-Heavy' }}>User Name</Text>
        <Text style={{ fontSize: getAdjustedFontSize(14), fontFamily: 'AvenirLTStd-MediumOblique' }}>Status dos dados: Atualizado</Text>
      </Header>
      <SafeAreaView style={{ flex: 1, marginTop: heightPercentageToDp('1.2%')  }}>
        {/* <DrawerItems {...props} /> */}

        <Row
          onPress={() => props.navigation.navigate('EditInfo')}
        >
          <Icon style={{ fontSize: getAdjustedFontSize(20) }} name="settings" size={12} />
          <Text style={{ fontSize: getAdjustedFontSize(16), paddingLeft: widthPercentageToDp('3%'), fontFamily: 'AvenirLTStd-Medium' }}>Editar informações</Text>
        </Row>
        <Row>
          <Icon style={{ fontSize: getAdjustedFontSize(20) }} name="delete" size={12} />
          <Text style={{ fontSize: getAdjustedFontSize(16), paddingLeft: widthPercentageToDp('3%'), fontFamily: 'AvenirLTStd-Medium' }}>Limpar dados</Text>
        </Row>
        <Row>
          <Icon style={{ fontSize: getAdjustedFontSize(20) }} name="description" size={12} />
          <Text style={{ fontSize: getAdjustedFontSize(16), paddingLeft: widthPercentageToDp('3%'), fontFamily: 'AvenirLTStd-Medium' }}>Sugestões</Text>
        </Row>
        <Row>
          <Icon style={{ fontSize: getAdjustedFontSize(20) }} name="filter-none" size={12} />
          <Text style={{ fontSize: getAdjustedFontSize(16), paddingLeft: widthPercentageToDp('3%'), fontFamily: 'AvenirLTStd-Medium' }}>Sobre</Text>
        </Row>
        <Row
          onPress={() => logoutUser()}
        >
          <Icon style={{ fontSize: getAdjustedFontSize(20) }} name="power-settings-new" size={12} />
          <Text style={{ fontSize: getAdjustedFontSize(16), paddingLeft: widthPercentageToDp('3%'), fontFamily: 'AvenirLTStd-Medium' }}>Sair</Text>
        </Row>
      </SafeAreaView>
    </Container>
  );
}
