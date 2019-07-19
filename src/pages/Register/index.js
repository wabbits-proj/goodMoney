import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Container, LogoView, Logo, FormView, Form, Label } from './styles';

import Input from '~/components/Input';
import Button from '~/components/Button';

import logo from '~/images/logo.png';

import { changeName, changeEmail, changePassword, changeConfirmPassword } from '~/store/actions/credentials';
import { createUser } from '~/services/firebase';

export default function Register(props) {
  const dispatch = useDispatch();
  const credentials = useSelector(state => state.credentials);
  let backHandler = null;

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

  function onPressBtnRegister(){
    const { name, email, password, confirmPassword } = credentials;

    if(name != '' && email != ''&& password != ''&& confirmPassword != ''){
      if(password === confirmPassword){
        createUser(name, email, password)
          .then(data => {
            alert('Cadastro Realizado com sucesso!');
            props.navigation.navigate('Login');
          })
          .catch(error => {
            console.log(error);
          })      
      } else{
        alert('Verifique sua confirmação!');
      }
    } else{
      alert('Preencha o formulário para continuar');
    }
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
            <Label>* Nome</Label>
            <Input 
              text="Nome do Usuário" 
              borderColor="#42AB9E" 
              val={credentials.name} 
              func={(text) => dispatch(changeName(text))}
            />
            <Label>* E-mail</Label>
            <Input 
              type="email-address"
              text="nome@email.com" 
              borderColor="#42AB9E" 
              val={credentials.email} 
              func={(text) => dispatch(changeEmail(text))}
            />
            <Label>* Senha</Label>
            <Input 
              text="**********" 
              borderColor="#42AB9E" 
              security={true}
              val={credentials.password} 
              func={(text) => dispatch(changePassword(text))}
            />
            <Label>* Confirme a Senha</Label>
            <Input 
              text="**********" 
              borderColor="#42AB9E" 
              security={true}
              val={credentials.confirmPassword} 
              func={(text) => dispatch(changeConfirmPassword(text))}
            />

            <Button text="CADASTRAR" func={onPressBtnRegister}  />
          </Form>
        </FormView>
    </Container>
  );
}
