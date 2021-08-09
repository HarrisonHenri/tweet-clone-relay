import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.secondary.main};
  padding: ${props => props.theme.spacing.medium};
`;

export const ButtonsContainer = styled.View`
  flex-shrink: 0;
  justify-content: space-between;
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
