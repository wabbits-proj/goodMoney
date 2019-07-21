import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/images/logo.png';
import { getAdjustedFontSize } from "~/services/utils";
import { Container, Left, Center, Right, Logo, TouchIcon } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <Left>
        <TouchIcon
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon name="short-text" size={getAdjustedFontSize(35)} />
        </TouchIcon>
      </Left>
      <Center>
        <Logo
          source={logo}
          resizeMethod="scale"
          resizeMode="center"
        />
      </Center>
      <Right>
      </Right>
    </Container>
  );
}
