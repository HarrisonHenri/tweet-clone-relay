import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

const Button: React.FC<RectButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
