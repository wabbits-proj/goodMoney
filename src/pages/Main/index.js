import React from 'react';
import { StatusBar, Text } from "react-native";

import { 
  Container
} from './styles';

import Header from '~/components/Header';
import Chart from '~/components/Chart';
import InfoMoney from '~/components/InfoMoney';

export default function Main(props) {
  return (
    <>
      <Header navigation={props.navigation} />
      <Container>
        <InfoMoney />
        <Chart />
      </Container>
    </>
  );
}

Main.navigationOptions = ({ navigation }) => ({
  title: "Home",
});

