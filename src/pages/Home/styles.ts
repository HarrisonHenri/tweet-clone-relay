import styled from 'styled-components/native';

import PlusSVG from '../../assets/icons/plus.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.secondary.dark};
  padding: 0 ${props => props.theme.spacing.high};
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

export const PlusIcon = styled(PlusSVG)`
  width: 22px;
  height: 22px;
  color: ${props => props.theme.colors.secondary.light};
`;
