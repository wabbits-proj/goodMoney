import React from 'react';

import { Container, Form } from './styles';

import Header from '~/components/Header';
import Input from '~/components/Input';

export default function Suggestion(props) {
  return (
    <>
      <Header navigation={props.navigation} />
      <Container>
        <Form>
          <Input 
            type="email-address"
            // name="person" 
            text="nome@email.com" 
            borderColor="#FFB959" 
            val={null}  
            func={null}
          />
        </Form>
      </Container>
    </>
  );
}
