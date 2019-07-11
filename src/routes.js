import React from 'react';
import { ScrollView, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Forgot from '~/pages/Forgot';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

const CustomDrawerContentComponent = props => (
  <ScrollView style={{ flex: 1 }}>
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
    }}>
      <Icon name="person" size={108} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>User Name</Text>
      <Text style={{ fontSize: 14 }}>Status dos dados: Atualizado</Text>
    </View>
    <SafeAreaView style={{ flex: 1, }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const Drawer = createDrawerNavigator({
  Main
}, {
  contentComponent: CustomDrawerContentComponent,
  drawerWidth: widthPercentageToDp('80%'),
});

const AuthStack = createSwitchNavigator({
  Login,
  Register,
  Forgot
}, {
    initialRouteName: 'Login'
});

const Routes = createSwitchNavigator({
  Drawer: {
    screen: Drawer,
  },
  Auth: AuthStack
}, {
  initialRouteName: 'Auth',
});

export default createAppContainer(Routes);
