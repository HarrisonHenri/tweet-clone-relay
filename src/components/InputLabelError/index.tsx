import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

const InputLabelError: React.FC<TextInputProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default InputLabelError;
