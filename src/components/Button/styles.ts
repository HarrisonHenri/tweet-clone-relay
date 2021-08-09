import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton).attrs({})<{ noBg?: boolean }>`
  width: 100%;
  height: 48px;
  background: ${props => props.theme.colors.primary.main};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  ${props =>
    props.noBg &&
    `
    background-color: transparent;
    color: ${props.theme.colors.primary.main};
  `}
`;

export const ButtonText = styled.Text<{ noBg?: boolean }>`
  font-family: 'HelveticaNeue-Bold';
  color: ${props =>
    props.noBg
      ? props.theme.colors.primary.main
      : props.theme.colors.secondary.main};
  font-size: 18px;
`;
