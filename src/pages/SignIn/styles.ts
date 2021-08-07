import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.secondary.main};
  padding: ${props => props.theme.spacing.medium};
  justify-content: center;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: ${props => props.theme.colors.primary.main};
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

export const Text = styled.Text`
  font-family: 'HelveticaNeue-Bold';
  font-size: 18px;
  text-align: center;
  color: ${props => props.theme.colors.primary.main};
`;

export const Link = styled.TouchableOpacity`
  margin-top: 24px;
  padding: ${props => props.theme.spacing.high};
`;

export const LinkText = styled.Text`
  color: ${props => props.theme.colors.primary.light};
  font-size: 16px;
  text-align: center;
  font-family: 'HelveticaNeue-Bold';
`;
