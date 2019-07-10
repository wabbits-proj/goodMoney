import React from 'react';

import { Container, LogoView, Logo, FormView, Form, Label } from './styles';

import Input from '~/components/Input';
import Button from '~/components/Button';

import logo from '~/images/logo.png';

export default function Forgot() {
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
