import React from 'react';

import { Container, Col, Btn, TxtBtn } from './styles';

export default function Footer() {
  return (
    <Container>
      <Col>
        <Btn background="#AA4343">
          <TxtBtn>Gasto</TxtBtn>
        </Btn>
      </Col>
      <Col>
        <Btn background="#42AB9E">
          <TxtBtn>Ganho</TxtBtn>
        </Btn>
      </Col>
    </Container>
  );
}
