import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 48px;
  background: ${props => props.theme.colors.primary.main};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'HelveticaNeue-Bold';
  color: ${props => props.theme.colors.secondary.main};
  font-size: 18px;
`;
