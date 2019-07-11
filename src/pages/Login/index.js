import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

import { changeEmail, changePassword } from '~/store/actions/credentials';
import { login } from '~/services/firebase';
import { setItem } from '~/services/storage';

export default function Login(props) {
  const dispatch = useDispatch();
  const credentials = useSelector(state => state.credentials);

  function onPressBtnAcess() {    
    const { email, password } = credentials;

    if(email != '' && password != ''){
      login(email, password)
        .then(data => {
          loginSucess(data)
        })
        .catch(error => {
          console.log(error);
        })      
    } else{
      alert('Preencha o formulário para continuar');
    }
  }

  async function loginSucess(data){
    await setItem('user', { id: data.uid, email: data.email });
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
        <Input 
          name="person" 
          text="nome@email.com" 
          borderColor="#FFB959" 
          val={credentials.email}  
          func={(text) => dispatch(changeEmail(text))}
        />
        <Input 
          name="lock" 
          text="**********" 
          security={true}
          borderColor="#FFB959" 
          val={credentials.password} 
          func={(text) => dispatch(changePassword(text))}
        />

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

