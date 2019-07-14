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

import DrawerComponent from '~/components/DrawerComponent';

import { widthPercentageToDp } from "~/services/utils";

const CustomDrawerContentComponent = props => (
  <DrawerComponent />
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
  initialRouteName: 'Drawer',
});

export default createAppContainer(Routes);
