import styled from 'styled-components/native';

import HeartSVG from '../../assets/icons/heart.svg';

export const TweetContainer = styled.View`
  flex-grow: 1;
  background-color: ${props => props.theme.colors.secondary.light};
  padding: ${props => props.theme.spacing.medium};
  margin-top: ${props => props.theme.spacing.medium};
  border-radius: ${props => props.theme.spacing.high};
`;

export const Header = styled.View`
  flex-direction: row;
  flex-shrink: 0;
`;

export const Text = styled.Text<{ bold?: boolean }>`
  font-family: 'HelveticaNeue-Light';
  font-size: 18px;

  ${props =>
    props.bold &&
    `
    font-weight: bold;
  `}
`;

export const SubText = styled(Text)`
  color: ${props => props.theme.colors.secondary.dark};
  margin-left: 16px;
`;

export const Content = styled.View`
  flex-grow: 1;
  margin-top: ${props => props.theme.spacing.small};
`;

export const LikesButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  flex-direction: row;
  margin-top: ${props => props.theme.spacing.small};
`;

export const LikesIcon = styled(HeartSVG)`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.secondary.dark};
`;
