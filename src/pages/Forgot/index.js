import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

import { Container, LogoView, Logo, FormView, Form, Label } from './styles';

import Input from '~/components/Input';
import Button from '~/components/Button';

import logo from '~/images/logo.png';

export default function Forgot(props) {
  useEffect(() => {
    backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      props.navigation.navigate('Login');
      removeEventListener();
      return true;
    });
  }, []);

  function removeEventListener() {
    backHandler.remove();
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
        <FormView>
          <Form>
            <Label>* E-mail</Label>
            <Input text="nome@email.com" borderColor="#42AB9E" />

            <Button text="ALTERAR SENHA"  />
          </Form>
        </FormView>
    </Container>
  );
}
