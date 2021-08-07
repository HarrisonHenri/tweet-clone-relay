import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  margin: 8px 0;
  border-radius: 16px;
  background: ${props => props.theme.colors.secondary.dark};
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: 'HelveticaNeue-Medium';
  color: ${props => props.theme.colors.secondary.main};
`;
