import React from 'react';
import { DrawerItems,  SafeAreaView } from 'react-navigation';
import { Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getAdjustedFontSize, widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

import { Container, Header, Row } from './styles';

export default function DrawerComponent(props) {
  return (
    <Container>
      <Header>
        <Icon name="person" size={getAdjustedFontSize(108)} />
        <Text style={{ fontSize: getAdjustedFontSize(20), fontWeight: 'bold' }}>User Name</Text>
        <Text style={{ fontSize: getAdjustedFontSize(14) }}>Status dos dados: Atualizado</Text>
      </Header>
      <SafeAreaView style={{ flex: 1, marginTop: heightPercentageToDp('1.2%')  }}>
        {/* <DrawerItems {...props} /> */}

        <Row>
          <Icon style={{ fontSize: getAdjustedFontSize(20) }} name="settings" size={12} />
          <Text style={{ fontSize: getAdjustedFontSize(16), paddingLeft: widthPercentageToDp('3%') }}>Editar informações</Text>
        </Row>
        <Row>
          <Icon style={{ fontSize: getAdjustedFontSize(20) }} name="delete-outline" size={12} />
          <Text style={{ fontSize: getAdjustedFontSize(16), paddingLeft: widthPercentageToDp('3%') }}>Limpar dados</Text>
        </Row>
        <Row>
          <Icon style={{ fontSize: getAdjustedFontSize(20) }} name="description" size={12} />
          <Text style={{ fontSize: getAdjustedFontSize(16), paddingLeft: widthPercentageToDp('3%') }}>Sugestões</Text>
        </Row>
        <Row>
          <Icon style={{ fontSize: getAdjustedFontSize(20) }} name="filter-none" size={12} />
          <Text style={{ fontSize: getAdjustedFontSize(16), paddingLeft: widthPercentageToDp('3%') }}>Sobre</Text>
        </Row>
        <Row>
          <Icon style={{ fontSize: getAdjustedFontSize(20) }} name="power-settings-new" size={12} />
          <Text style={{ fontSize: getAdjustedFontSize(16), paddingLeft: widthPercentageToDp('3%') }}>Sair</Text>
        </Row>
      </SafeAreaView>
    </Container>
  );
}
