import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface Props extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<Props> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <TextInput {...rest} />
    </Container>
  );
};

export default Input;
