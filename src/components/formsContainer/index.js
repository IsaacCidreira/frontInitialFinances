import React from 'react';
import { Container } from './style';

const FormsContainer = ({ children, error }) => {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
};

export default FormsContainer;
