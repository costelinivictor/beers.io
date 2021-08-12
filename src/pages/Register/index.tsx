import React from 'react';

import { Container, Input, SubmitButton } from './styles';

const Register: React.FC = () => {
  return (
    <div className="flex justify-center mt-24">
      <Container>
        <span>Name</span>
        <Input />
        <span>Description</span>
        <Input />
        <SubmitButton>Submit</SubmitButton>
      </Container>
    </div>
  );
}

export default Register;