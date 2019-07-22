import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import AuthLoading from '~/pages/AuthLoading';
import Main from '~/pages/Main';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Forgot from '~/pages/Forgot';

import DrawerComponent from '~/components/DrawerComponent';

import { widthPercentageToDp } from "~/services/utils";

const Drawer = createDrawerNavigator({
  Main
}, {
  contentComponent: (props) => <DrawerComponent navigation={props.navigation} />,
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
  Auth: AuthStack,
  AuthLoading
}, {
  initialRouteName: 'AuthLoading',
});

export default createAppContainer(Routes);
