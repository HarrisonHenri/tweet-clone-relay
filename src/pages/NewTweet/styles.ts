import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.secondary.main};
  padding: ${props => props.theme.spacing.medium};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{ noBg?: boolean }>`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 35px;
  border-radius: 35px;
  background-color: ${props => props.theme.colors.primary.main};

  ${props =>
    props.noBg &&
    `
    background-color: transparent;
    color: ${props.theme.colors.primary.main};
  `}
`;

export const ButtonText = styled.Text<{ noBg?: boolean }>`
  color: white;
  font-family: 'HelveticaNeue-Light';
  font-size: 16px;

  ${props =>
    props.noBg &&
    `
    color: ${props.theme.colors.primary.main};
  `}
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 16px;
`;

export const Input = styled.TextInput`
  flex-grow: 1;
  font-family: 'HelveticaNeue-Light';
  font-size: 16px;
`;
