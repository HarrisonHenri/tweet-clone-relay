import styled from 'styled-components/native';

export const AppContainer = styled.SafeAreaView`
  flex-grow: 1;
  background-color: ${props => props.theme.colors.secondary.main};
`;
