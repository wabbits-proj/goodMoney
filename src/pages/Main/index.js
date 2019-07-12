import React from 'react';

import { 
  Container
} from './styles';

import Header from '~/components/Header';
import Chart from '~/components/Chart';
import InfoMoney from '~/components/InfoMoney';
import History from '~/components/HistFinances';
import Footer from '~/components/Footer';

export default function Main(props) {
  return (
    <>
      <Header navigation={props.navigation} />
      <Container>
        <InfoMoney />
        <Chart />
        <History />
      </Container>
      <Footer />
    </>
  );
}

Main.navigationOptions = ({ navigation }) => ({
  title: "Home",
});

