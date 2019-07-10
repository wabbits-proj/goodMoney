import React from 'react';
import { StatusBar } from "react-native";

import {
  Container,
  LogoView,
  Logo, Form,
  TextForgot,
  Text,
  ViewRegister,
  TextRegister,
  TextTochRegister
} from './styles';

import Input from '~/components/Input';
import Button from '~/components/Button';

import logo from '~/images/logo.png';

export default function Login(props) {
  function onPressBtnAcess() {
    props.navigation.navigate('Drawer');
  }

  function onPressBtnRegister() {
    props.navigation.navigate('Register');
  }

  function onPressTxtForgot() {
    props.navigation.navigate('Forgot');
  }

  return (
    <Container>
      <LogoView>
        <Logo
          source={logo}
          resizeMethod="scale"
          resizeMode="center"
        />
      </LogoView>
      <Form>
        <Input name="person" text="nome@email.com" borderColor="#FFB959" />
        <Input name="lock" text="**********" borderColor="#FFB959" />

        <TextForgot
          onPress={onPressTxtForgot}
        >
          <Text>Esqueceu a senha?</Text>
        </TextForgot>

        <Button text="ACESSAR" func={onPressBtnAcess} />
      </Form>
      <ViewRegister>
        <TextRegister color="#828282">Não tem uma conta?</TextRegister>
        <TextTochRegister
          onPress={onPressBtnRegister}
        >
          <TextRegister color="#42AB9E"> Cadastre-se</TextRegister>
        </TextTochRegister>
      </ViewRegister>
    </Container>
  );
}

