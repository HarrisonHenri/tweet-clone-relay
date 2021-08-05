import styled from 'styled-components/native';

export const Container = styled.Text`
  font-family: 'HelveticaNeue-Medium';
  font-size: 12px;
  color: ${props => props.theme.colors.error};
`;
