import React, { useEffect } from 'react';

import { Container } from './styles';
import { getItem } from '~/services/storage';

export default function AuthLoading(props) {

  async function validUser(){
    let user = await getItem('user');
    if(user != null){
      props.navigation.navigate('Drawer');
    } else{
      props.navigation.navigate('Auth');
    }
  }

  useEffect(() => {
    validUser();
  }, []);

  return (
    <Container />
  );
}
