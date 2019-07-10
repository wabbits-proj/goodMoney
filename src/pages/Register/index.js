import React from 'react';

import { Container, LogoView, Logo, FormView, Form, Label } from './styles';

import Input from '~/components/Input';
import Button from '~/components/Button';

import logo from '~/images/logo.png';

export default function Register() {
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
            <Label>* Nome</Label>
            <Input text="Nome do Usuário" borderColor="#42AB9E" />
            <Label>* E-mail</Label>
            <Input text="nome@email.com" borderColor="#42AB9E" />
            <Label>* Senha</Label>
            <Input text="**********" borderColor="#42AB9E" />
            <Label>* Confirme a Senha</Label>
            <Input text="**********" borderColor="#42AB9E" />

            <Button text="CADASTRAR"  />
          </Form>
        </FormView>
    </Container>
  );
}
