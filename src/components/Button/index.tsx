import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ExtendedProps extends RectButtonProps {
  noBg?: boolean;
}

const Button: React.FC<ExtendedProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText noBg={rest.noBg}>{children}</ButtonText>
    </Container>
  );
};

export default Button;
