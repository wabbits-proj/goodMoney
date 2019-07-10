import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Center, Right, Logo, TouchIcon } from './styles';

import logo from '~/images/logo.png';

export default function Header({ navigation }) {
  return (
    <Container>
      <Left>
        <TouchIcon
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon name="short-text" size={33} />
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
