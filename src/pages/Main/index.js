import React from 'react';
import { useSelector } from 'react-redux';

import { 
  Container
} from './styles';

import Header from '~/components/Header';
import Chart from '~/components/Chart';
import InfoMoney from '~/components/InfoMoney';
import History from '~/components/HistFinances';
import Footer from '~/components/Footer';
import InfoProgress from '~/components/InfoProgress';

export default function Main(props) {
  const todo = useSelector(state => state.todo);  

  return (
    <>
      <Header navigation={props.navigation} />
      <Container>
        <InfoMoney />
        { (todo.infoMoneyDone) ? <InfoProgress /> : null }
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

