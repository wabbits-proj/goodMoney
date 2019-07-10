import React from 'react';
import { StatusBar, Text } from "react-native";

import { 
  Container
} from './styles';

import Header from '~/components/Header';

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        
      </Container>
    </>
  );
}

Main.navigationOptions = ({ navigation }) => ({
  title: "Home",
});

